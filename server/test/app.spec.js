jest.mock('elasticsearch');

const request = require('supertest');
const app = require('../src/app');
let server = null;

describe(`routes :: /all`, () => {
  beforeEach((done) => {
    server = app.listen(done);
  });

  afterEach(() => {
    server.close();
  });

  it(`should fetch all spells`, async () => {
    const response = await request(server).get('/all');
    expect(response.statusCode).toBe(200);
  });

  it(`should fetch all spells`, async () => {
    const response = await request(server).get('/all?offset=1');
    expect(response.statusCode).toBe(200);
  });

  it(`should not allow negative offsets`, async () => {
    console.error = jest.fn();
    const response = await request(server).get('/all?offset=-1');
    expect(response.statusCode).toBe(400);
  })
});
