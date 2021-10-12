import request from 'supertest';
import { constants } from '../../../constants/constants.js';
import { startServer } from '../../../setupServer.js';
import { userMock as user } from '../../mocks/user.js';

describe('POST api/user - adding user', () => {
    let server;
    beforeAll(async () => {
        server = await startServer(4000);
    });

    afterAll(() => {
        server.close();
    });

    it('should add user successfully whan data are correct', async () => {
        const res = await request(server).post('/api/user').send(user);
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject({ "msg": constants.USER_ADDED });
    });

    it('should return msg about missing params whan some params are missing', async () => {
        let userWithoutEmail = { ...user };
        delete userWithoutEmail.email;

        const res = await request(server).post('/api/user').send(userWithoutEmail);
        expect(res.statusCode).toBe(400);
        expect(res.body).toMatchObject({ "msg": constants.MISSING_PARAMS });
    });

    it('should return msg about wrong date format whan date is incorrect', async () => {
        let userWrongDate = { ...user };
        userWrongDate.date = "20220102";

        const res = await request(server).post('/api/user').send(userWrongDate);
        expect(res.statusCode).toBe(400);
        expect(res.body).toMatchObject({ "msg": constants.WRONT_FORMAT_DATE });
    });

    it('should return msg about wrong email format whan email is incorrect', async () => {
        let userWrongEmail = { ...user };
        userWrongEmail.email = "wrongemail.com";

        const res = await request(server).post('/api/user').send(userWrongEmail);
        expect(res.statusCode).toBe(400);
        expect(res.body).toMatchObject({ "msg": constants.WRONT_FORMAT_EMAIL });
    });
})