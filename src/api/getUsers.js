import { users } from '../data/data';
import { normaliseOptionsUser } from './normaliseData';

export function getUsersData() {
	return normaliseOptionsUser(users);
}
