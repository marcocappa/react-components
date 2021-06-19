/**
 * normaliseOptionsUser function
 * @param {*} users
 * @returns {array} normalise options for user data
 */
export function normaliseOptionsUser(users) {
	return users.map(({ name, id }) => ({ value: name, id }));
}

/**
 * normaliseOptionsCountries function
 * @param {*} countries
 * @returns {array} normalise options for country data
 */
export function normaliseOptionsCountries(country) {
	return country.map(({ name, country, id }) => ({
		value: `${country} - ${name}`,
		id,
	}));
}
