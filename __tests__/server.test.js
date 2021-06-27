xtest('adds 1+2 equals 3', () => {
  expect(1 + 2).toBe(5);
});


'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('API server', () => {
  it('Handles invalid Requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('Handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

  it('correct routes', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
  });
});