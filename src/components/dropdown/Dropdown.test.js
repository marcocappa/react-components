import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown', () => {
	const handleUserSelect = jest.fn();
	const options = [
		{ value: 'Andy', id: 1 },
		{ value: 'George', id: 2 },
		{ value: 'Clive', id: 3 },
		{ value: 'Peter', id: 4 },
		{ value: 'Cleatus', id: 5 },
		{ value: 'Alex', id: 6 },
		{ value: 'Omar', id: 7 },
		{ value: 'Carl', id: 8 },
		{ value: 'William', id: 9 },
		{ value: 'Donald', id: 10 },
		{ value: 'Dave', id: 11 },
		{ value: 'Jerry', id: 12 },
		{ value: 'Gerrie', id: 13 },
	];

	const { asFragment } = render(
		<Dropdown
			id="users"
			options={options}
			onSelect={handleUserSelect}
			label="Select user:"
		/>
	);

	expect(asFragment()).toMatchSnapshot();
});
