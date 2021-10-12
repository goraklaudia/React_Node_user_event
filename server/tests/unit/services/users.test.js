import { addUserData } from '../../../services/users.js';
import { userMock } from '../../mocks/user.js';
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';
jest.mock('../../../databases/users.js');
import { postUser } from '../../../databases/users.js';

describe("Service addUserData function", () => {
    let database = {};

    beforeEach(async () => {
        database = await prepareDatabase('../../mocks/database/mock.database.db');
    });

    it('should return msg that the user has been added successfully when user is valid', async () => {
        postUser.mockReturnValueOnce(constants.USER_ADDED);

        const result = await addUserData(database, userMock);

        expect(result).toBe(constants.USER_ADDED);
    });

    it('should return error when database function catch error', async () => {
        postUser.mockImplementation(() => { throw new Error(); });

        const result = await addUserData(database, userMock)

        expect(result).toBe(constants.ERROR);
    });

    it('should return msg that the email has wront format when email is invalid', async () => {
        const userWrongEmail = { ...userMock };
        userWrongEmail.email = 'wrongemail.com';

        const result = await addUserData(database, userWrongEmail);

        expect(result).toBe(constants.WRONT_FORMAT_EMAIL);
    });

    it('should return msg that the date has wront format when date is invalid', async () => {
        const userWrongDate = { ...userMock };
        userWrongDate.date = '20120202';

        const result = await addUserData(database, userWrongDate);

        expect(result).toBe(constants.WRONT_FORMAT_DATE);
    });

});