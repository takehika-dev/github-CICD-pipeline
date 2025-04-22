const request = require('supertest');
const http = require('http');

let server;
beforeAll(() => {
  server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
  server.listen(3001);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!\n');
  });
});
