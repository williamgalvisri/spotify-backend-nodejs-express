
import { STATUS_RESPONSE } from '../../src/constants/status-response.constants';
import request from 'supertest';

import app from '../../app';
import { userDummyData } from './dummy/user.dummy';
  
describe('POST /user', () => {
    describe('given User payload shoul be register user', () => {
        it('should be response with a 200 status code and STATUS_RESPONSE.user.userRegistered', async () => {
            const { statusCode, body } = await request(app).post('/user/user-signup').send(userDummyData.userRegister)
            expect(statusCode).toBe(200)
            expect(body).toMatchObject(STATUS_RESPONSE.user.userRegistered)
        })
    })
})