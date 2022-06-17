import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Delete User Controller', () => {
  afterAll(async () => {
    await prisma.users.deleteMany();
  });

  it('should be able to delete a user', async () => {
    const createUser = await request(app).post('/users/create').send({
      nome: 'Flávio Junior',
      email: 'valid@mail.com',
      senha: '123456',
    });

    const deleteUser = await request(app).delete(`/users/delete/${createUser.body.id}`);

    expect(deleteUser.status).toBe(200);
    expect(deleteUser.body.deletado).toBeTruthy();
  });
});
