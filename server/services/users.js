import { postUser } from '../databases/users.js';
import { constants } from '../constants/constants.js';

export const addUserData = async (database, user) => {
    try {
        return await postUser(database, Object.values(user));
    } catch (error) {
        console.error(error);
        return constants.ERROR;
    }
}