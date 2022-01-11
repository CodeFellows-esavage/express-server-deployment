'use strict';

const server = require('../app');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing my HTTP server', () => {
  it('should be able to response to a POST to /message', async () => {
    let response = await request.post('/message?text=test&author=test');

    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('test');
  });
});