import {
	normaliseOptionsUser,
	normaliseOptionsCountries,
} from './normaliseData';

test('normaliseOptionsUser', () => {
	const users = [
		{ name: 'Nick', id: 1 },
		{ name: 'Peter', id: 2 },
	];
	const data = normaliseOptionsUser(users);
	expect(data).toEqual([
		{ value: 'Nick', id: 1 },
		{ value: 'Peter', id: 2 },
	]);
});

test('normaliseOptionsCountries', () => {
	const users = [
		{ name: 'United Kingdom', country: 'UK', id: 1 },
		{ name: 'France', country: 'FRA', id: 2 },
		{ name: 'Spain', country: 'SPA', id: 3 },
	];
	const data = normaliseOptionsCountries(users);
	expect(data).toEqual([
		{ value: 'UK - United Kingdom', id: 1 },
		{ value: 'FRA - France', id: 2 },
		{ value: 'SPA - Spain', id: 3 },
	]);
});
