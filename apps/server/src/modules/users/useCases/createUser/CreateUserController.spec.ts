import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Create User Controller', () => {
  afterAll(async () => {
    await prisma.users.deleteMany();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'fpdsjr@mail.com',
      senha: '123456',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
