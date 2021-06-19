import { countries } from '../data/data';
import { normaliseOptionsCountries } from './normaliseData';

export function getCountriesData() {
	return normaliseOptionsCountries(countries);
}
