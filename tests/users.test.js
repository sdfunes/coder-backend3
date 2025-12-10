import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Users API', () => {
  it('GET /api/users → debe retornar todos los usuarios', async () => {
    const res = await request(app).get('/api/users');

    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.users).to.be.an('array');
  });
});
