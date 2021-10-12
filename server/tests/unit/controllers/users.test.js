
jest.mock('../../../services/users.js');
import { addUserData } from '../../../services/users.js';
import { userMock } from '../../mocks/user.js';
import { addUser } from '../../../controllers/users.js';
import { constants } from '../../../constants/constants.js';

describe("Controller addUser function", () => {
    let res = {};
    const req = {
        body: { ...userMock }
    }

    beforeEach(() => {
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
    });

    it('should return msg that the user has been added successfully when request has all correct data', async () => {
        addUserData.mockReturnValueOnce(constants.USER_ADDED);

        await addUser(req, res);

        expect(addUserData).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
    });

    it('should return msg that some parameters are missing when request has no date', async () => {
        const reqWithoutDate = { ...req };
        delete reqWithoutDate.body.date;

        await addUser(reqWithoutDate, res);

        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return msg that date has wrong format when date is not correct', async () => {
        const reqWrongDate = { ...req };
        reqWrongDate.body.date = '20120202';

        addUserData.mockReturnValueOnce(constants.WRONT_FORMAT_DATE);

        await addUser(reqWrongDate, res);

        expect(addUserData).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return msg that email has wrong format when email is not correct', async () => {
        const reqWrongEmail = { ...req };
        reqWrongEmail.body.email = 'wrongemail.com';

        addUserData.mockReturnValueOnce(constants.WRONT_FORMAT_EMAIL);

        await addUser(reqWrongEmail, res);

        expect(addUserData).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return error when service catch error', async () => {
        addUserData.mockReturnValueOnce(constants.ERROR);

        await addUser(req, res);

        expect(addUserData).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });
});