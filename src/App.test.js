import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select user', () => {
	render(<App />);
	const selectUsers = screen.getByText(/Select user:/i);
	expect(selectUsers).toBeInTheDocument();

	const userMessage = screen.getByText(/No user selected/i);
	expect(userMessage).toBeInTheDocument();
});

test('renders select country', () => {
	render(<App />);
	const selectCountries = screen.getByText(/Select country:/i);
	expect(selectCountries).toBeInTheDocument();

	const countryMessage = screen.getByText(/No Country selected/i);
	expect(countryMessage).toBeInTheDocument();
});
