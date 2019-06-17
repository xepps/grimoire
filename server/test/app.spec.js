jest.mock('elasticsearch');

const request = require('supertest');
const app = require('../src/app');

let server = null;

describe('routes', () => {
  describe('/all', () => {
    beforeEach((done) => {
      server = app.listen(done);
    });

    afterEach(() => {
      server.close();
    });

    it('should fetch all spells', async () => {
      const response = await request(server).get('/all');
      expect(response.statusCode).toBe(200);
      expect(response.body.calledESWith.body.query).toStrictEqual({ match_all: {} });
      expect(response.body.calledESWith.body.from).toBe(0);
    });

    it('should fetch all spells from elasticsearch', async () => {
      const response = await request(server).get('/all?offset=1');
      expect(response.statusCode).toBe(200);
      expect(response.body.calledESWith.body.from).toBe('1');
    });

    it('should not allow negative offsets', async () => {
      console.error = jest.fn();
      const response = await request(server).get('/all?offset=-1');
      expect(response.statusCode).toBe(400);
    });
  });

  describe('/spells', () => {
    it('should search ES with a search term', async () => {
      const response = await request(server).get('/search?term=fire');
      expect(response.body.calledESWith.body.query.multi_match.query).toStrictEqual('fire');
      expect(response.statusCode).toBe(200);
    });

    it('should rank results based on a custom sort', async () => {
      const response = await request(server).get('/search?term=fire');
      expect(response.body.calledESWith.body.query.multi_match.fields).toStrictEqual([
        'at_higher_levels^2', 'casting_time', 'name^3', 'duration', 'range', 'description^2', 'material_component',
      ]);
      expect(response.statusCode).toBe(200);
    });

    it('should call ES with a default offset of 0', async () => {
      const response = await request(server).get('/search?term=fire');
      expect(response.body.calledESWith.body.from).toBe(0);
      expect(response.statusCode).toBe(200);
    });

    it('should call ES with a passed offset', async () => {
      const response = await request(server).get('/search?term=fire&offset=2');
      expect(response.body.calledESWith.body.from).toBe('2');
      expect(response.statusCode).toBe(200);
    });

    it('should throw an error if a term is passed with length less than 0 characters', async () => {
      console.error = jest.fn();
      const response = await request(server).get('/search?term=');
      expect(response.statusCode).toBe(400);
    });

    it('should throw an error if a term is passed with length more than 60 characters', async () => {
      console.error = jest.fn();
      const longTerm = '1234567890123456789012345678901234567890123456789012345678901';
      const response = await request(server).get(`/search?term=${longTerm}`);
      expect(response.statusCode).toBe(400);
    });

    it('should not allow negative offsets', async () => {
      console.error = jest.fn();
      const response = await request(server).get('/search?term=fire&offset=-1');
      expect(response.statusCode).toBe(400);
    });
  });
});
