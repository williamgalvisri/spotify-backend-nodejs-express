import { STATUS_RESPONSE } from '../../src/constants/status-response.constants';
import request from 'supertest';
import app from '../../app';
import { sessionDummyData } from './dummy/session.dummy';

describe('POST /session', () => {
    describe('given email and password', () => {
        it('when the email and password are incorrect shoul be return status 400 and STATUS_RESPONSE.session.userNotFound', async () => {
            const {statusCode, body} = await request(app).post('/session/login').send(sessionDummyData.sessionIncorrectEmail);

            expect(statusCode).toBe(400);
            expect(body).toMatchObject(STATUS_RESPONSE.session.userNotFound);
        })
        it('when the password is incorrect should be return status 401 and STATUS_RESPONSE.session.userUnauthorized', async () => {
            const {statusCode, body} = await request(app).post('/session/login').send(sessionDummyData.sessionIncorrectPassword);

            expect(statusCode).toBe(401);
            expect(body).toMatchObject(STATUS_RESPONSE.session.userUnauthorized);
        })

        it('when the login is success should be return a token param', async () => {
            const {statusCode, body} = await request(app).post('/session/login').send(sessionDummyData.sessionCorrect);
            expect(statusCode).toBe(200);
            expect(body).toMatchObject(STATUS_RESPONSE.session.userLoginSuccess);
            expect(body).toHaveProperty('data')
            expect(body.data).toHaveProperty('token')
        })

    })
})

