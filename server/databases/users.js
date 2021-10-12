import { constants } from '../constants/constants.js';

export const postUser = async (database, user) => {
    try {
        await database.run(`INSERT INTO users(firstName, lastName, email, date) VALUES(?, ?, ?, ?)`, user);
        return constants.USER_ADDED;
    } catch (error) {
        console.error(error);
        return constants.ERROR;
    }
}