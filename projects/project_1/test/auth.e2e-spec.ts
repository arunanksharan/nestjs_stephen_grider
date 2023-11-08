import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupApp } from './../src/setup-app';

describe('Authentication System (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app);
    await app.init();
  });

  it('Handles a signup request', () => {
    const signUpEmail = 'arunanksharan4@gmail.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: signUpEmail, password: '12345678' })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(signUpEmail);
      });
  });

  it('Signup as a new user and get the currently logged in user', async () => {
    const signUpEmail = 'asdf1@asdf.com';
    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: signUpEmail, password: '12345678' })
      .expect(201);
    const cookie = res.get('Set-Cookie');
    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);
    expect(body.email).toEqual(signUpEmail);
  });
});
