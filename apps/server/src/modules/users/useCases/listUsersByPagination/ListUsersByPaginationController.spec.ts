import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('List Users By Pagination Controller', () => {
  afterAll(async () => {
    await prisma.users.deleteMany();
  });

  it('should be able to listUsers by pagination', async () => {
    await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await request(app).post('/users/create').send({
      nome: 'Flávio Pereira',
      email: 'valid@gmail.com',
      senha: '123456',
    });

    const listUser = await request(app).get(`/users/list/?page=0&limit=10`);

    expect(listUser.status).toBe(200);
    expect(listUser.body.length).toBe(2);
  });

  it('should be able to listUsers using a filter', async () => {
    await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    await request(app).post('/users/create').send({
      nome: 'Flávio Pereira',
      email: 'valid@gmail.com',
      senha: '123456',
    });

    const listUser = await request(app).get(`/users/list/?page=0&limit=10&filter=email&search=valid@mail.com`);

    expect(listUser.status).toBe(200);
    expect(listUser.body.length).toBe(3);
  });
});
