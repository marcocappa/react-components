import { useState, useEffect } from 'react';
import Container from './components/container/Container';
import Dropdown from './components/dropdown/Dropdown';
import Message from './components/message/Message';

import { getCountriesData } from './api/getCountries';
import { getUsersData } from './api/getUsers';

function App() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		const usersOptions = getUsersData();
		setUsers(usersOptions);

		const countriesOptions = getCountriesData();
		setCountries(countriesOptions);
	}, []);

	const handleUserSelect = ({ value }) => {
		setSelectedUser(value);
	};

	const handleCountrySelect = ({ value }) => {
		setSelectedCountry(value);
	};

	return (
		<>
			<Container>
				<Dropdown
					id="users"
					options={users}
					onSelect={handleUserSelect}
					label="Select user:"
				/>
				<Message
					msg={
						selectedUser ? `User selected: ${selectedUser}` : 'No user selected'
					}
				/>
			</Container>
			<Container>
				<p>
					This is an example of reusing the same component with different data:
				</p>
				<Dropdown
					id="countries"
					options={countries}
					onSelect={handleCountrySelect}
					label="Select country:"
				/>
				<Message
					msg={
						selectedCountry
							? `Country selected: ${selectedCountry}`
							: 'No Country selected'
					}
				/>
			</Container>
		</>
	);
}

export default App;
