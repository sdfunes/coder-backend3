import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Mocks API', () => {
  it('GET /api/mocks/mockingpets → debe generar pets', async () => {
    const res = await request(app).get('/api/mocks/mockingpets?count=5');

    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.pets).to.be.an('array').with.length(5);
  });

  it('GET /api/mocks/mockingusers → debe generar 50 usuarios', async () => {
    const res = await request(app).get('/api/mocks/mockingusers');

    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.users).to.be.an('array').with.length(50);
  });

  it('POST /api/mocks/generateData → debe insertar usuarios y mascotas', async () => {
    const res = await request(app)
      .post('/api/mocks/generateData')
      .send({ users: 3, pets: 2 });

    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.insertedUsers).to.equal(3);
    expect(res.body.insertedPets).to.equal(2);
  });
});
