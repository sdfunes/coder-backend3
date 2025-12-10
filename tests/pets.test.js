import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('Pets API', () => {
  it('GET /api/pets → debe retornar todas las mascotas', async () => {
    const res = await request(app).get('/api/pets');

    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.pets).to.be.an('array');
  });
});
