import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Update User Controller', () => {
  afterAll(async () => {
    await prisma.users.deleteMany();
  });

  it('should be able to update a user', async () => {
    const createUser = await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    console.log(createUser.body.id);

    const updateUser = await request(app).put(`/users/update/${createUser.body.id}`).send({
      nome: 'Flávio Pereira',
      email: 'fpdsjr@mail.com',
      senha: '123456',
    });

    expect(updateUser.status).toBe(200);
    expect(updateUser.body.nome).toBe('Flávio Pereira');
    expect(updateUser.body.email).toBe('fpdsjr@mail.com');
  });
});
