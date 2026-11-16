import * as chaiModule from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app.mjs';

const chai = chaiModule.use(chaiHttp);
const assert = chai.assert;

describe('API libros', function () {
  it('GET /libros devuelve 3 libros', async function () {
    const requester = chai.request.execute(app).keepOpen();

    const response = await requester
      .get('/libros')
      .send();

    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    assert.equal(response.body.length, 3);

    requester.close();
  });

  it('GET /libros?disponible=true devuelve solo libros disponibles', async function () {
    // TODO:
    // 1. crear requester;
    // 2. hacer GET /libros?disponible=true;
    // 3. comprobar status 200;
    // 4. comprobar longitud 2;
    // 5. comprobar que todos tienen disponible === true;
    // 6. cerrar requester.
  });
});
