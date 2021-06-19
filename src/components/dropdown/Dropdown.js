import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import IconArrows from '../icons/IconArrows';
import IconClose from '../icons/IconClose';
import './Dropdown.scss';

const Dropdown = ({ id: selectId = '', options, label, onSelect }) => {
	const dropdownRef = useRef();
	const dropdownButtonRef = useRef();
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [valueSelected, setValueSelected] = useState('');
	const [idSelected, setIdSelected] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const [searchedOption, setSearchedOption] = useState('');

	const handleShowOptions = ({ target }) => {
		// if click or focus on the button showOptions
		if (dropdownRef.current && dropdownRef.current.contains(target)) {
			if (target === dropdownButtonRef.current) {
				setShowOptions((s) => !s);
			} else {
				setShowOptions(true);
			}
			return;
		}
		// if click or focus outside the "ref" hideOptions
		setShowOptions(false);
	};

	const handleFocus = () => {
		setShowOptions(true);
	};

	const handleSelection = (value, id) => {
		// set value selected and id:
		setValueSelected(value);
		setIdSelected(id);
		// close dropdown list:
		setShowOptions(false);
		// call onSelect with {id and value}:
		onSelect({ id, value });
	};

	const handleFocusOut = ({ target }) => {
		if (dropdownRef.current && dropdownRef.current.contains(target)) {
			return;
		}
		setShowOptions(false);
	};

	const handleCloseOptions = () => {
		setShowOptions(false);
	};

	const handleFilterOptions = ({ target: { value } }) => {
		setSearchedOption(value);
	};

	const handleResetSerchedOption = () => setSearchedOption('');

	useEffect(() => {
		document.addEventListener('keyup', handleFocusOut);
		document.addEventListener('mousedown', handleShowOptions);
		window.addEventListener('blur', handleCloseOptions);
		return () => {
			document.removeEventListener('keyup', handleFocusOut);
			document.removeEventListener('mousedown', handleShowOptions);
			window.removeEventListener('blur', handleCloseOptions);
		};
	}, []);

	useEffect(() => {
		setFilteredOptions(options);
	}, [options]);

	useEffect(() => {
		const newOptions = [...options].filter((option) =>
			option.value.toLowerCase().includes(searchedOption.toLowerCase())
		);
		console.log(newOptions);
		setFilteredOptions(newOptions);
	}, [options, searchedOption]);

	return (
		<div className="dropdown" ref={dropdownRef}>
			<div className="dropdown__header">
				{label && <label className="dropdown__header-label">{label}</label>}
				<button
					ref={dropdownButtonRef}
					className="dropdown__header-selected-option"
					onFocus={handleFocus}
				>
					{valueSelected === '' ? 'Select' : valueSelected}
					<IconArrows className="dropdown__header-icon" />
				</button>
			</div>
			<div className={classnames('dropdown__list', showOptions && 'active')}>
				{options.length > 10 && (
					<div className="dropdown__list-wrap-search">
						<input
							name={`select-option-search-${selectId}`}
							className="dropdown__list-search"
							type="text"
							placeholder="Search..."
							autoComplete="off"
							value={searchedOption}
							onChange={handleFilterOptions}
						/>

						<button
							className={classnames(
								'dropdown__list-clear-search',
								searchedOption && 'active'
							)}
							onClick={handleResetSerchedOption}
						>
							<IconClose className="dropdown__list-clear-search-icon" />
						</button>
					</div>
				)}
				{filteredOptions.length > 0 ? (
					filteredOptions.map(({ value, id }) => (
						<button
							className={classnames(
								'dropdown__list-item',
								idSelected === id && 'selected'
							)}
							key={id}
							onClick={() => handleSelection(value, id)}
						>
							{value}
						</button>
					))
				) : (
					<p className="dropdown__list-no-options">No options available!</p>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
