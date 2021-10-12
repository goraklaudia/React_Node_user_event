import { postUser } from '../databases/users.js';
import { constants } from '../constants/constants.js';
import { validateDate, validateEmail } from './utils/validations.js';

export const addUserData = async (database, user) => {
    try {
        const { email, date } = user;
        if (!validateEmail(email)) {
            return constants.WRONT_FORMAT_EMAIL;
        };

        if (!validateDate(date)) {
            return constants.WRONT_FORMAT_DATE;
        };

        return await postUser(database, Object.values(user));
    } catch (error) {
        console.error(error);
        return constants.ERROR;
    }
}