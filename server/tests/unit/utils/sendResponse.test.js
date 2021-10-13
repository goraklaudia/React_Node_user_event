import { constants } from '../../../constants/constants.js';
import sendResponse from '../../../constants/sendResponse.js';
import { userMock } from '../../mocks/user.js';

describe('Send response', () => {
    let res = {};
    const req = {
        body: { ...userMock }
    }

    beforeAll(async () => {
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
    });

    it('should return status 500 when constant msg is ERROR', () => {
        sendResponse(res, constants.ERROR);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return status 201 when constant msg is USER_ADDED', () => {
        sendResponse(res, constants.USER_ADDED);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return status 400 when constant msg is MISSING_PARAMS', () => {
        sendResponse(res, constants.MISSING_PARAMS);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return status 400 when constant msg is WRONT_FORMAT_DATE', () => {
        sendResponse(res, constants.WRONT_FORMAT_DATE);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return status 400 when constant msg is WRONT_FORMAT_EMAIL', () => {
        sendResponse(res, constants.WRONT_FORMAT_EMAIL);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalled();
    });
})