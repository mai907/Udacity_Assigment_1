import app from '../../app';
import supertest from 'supertest';

describe('check image api works', function () {

  it('returns 400 if filename not profided', async function () {
    await supertest(app).get('/api/images').expect(400,'Please provide a filename');
  });

  it('returns 200 if filename only provided', async function () {
    await supertest(app).get('/api/images?filename=palmtunnel').expect(200);
  });

  it('returns 200 if filename, width and height were provided', async function () {
    await supertest(app).get('/api/images?filename=palmtunnel&width=300&height=300').expect(200);
  });

});
