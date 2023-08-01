// tests/api.test.js

const request = require('supertest');
const app = require('../backend-app'); // Import Node.js app entry point

describe('/scrape', () => {
  it('should return 200 when fetching data from /api/data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
  });

  it('should return the expected data from /api/data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });

  
});
