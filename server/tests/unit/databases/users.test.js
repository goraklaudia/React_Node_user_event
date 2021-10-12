import { postUser } from '../../../databases/users.js';
import { userMock } from '../../mocks/user.js';
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';

describe("Database postUser function", () => {
    let database = {};
    const user = Object.values(userMock);

    beforeEach(async () => {
        database = await prepareDatabase('../../mocks/database/mock.database.db');
    });

    it('should return msg that the user has been added successfully when user data are correct', async () => {
        const result = await postUser(database, user);

        expect(result).toBe(constants.USER_ADDED);
    });

    it('should return error when no database object', async () => {
        const result = await postUser('', user);

        expect(result).toBe(constants.ERROR);
    });
});