import { NextFunction, Request, Response } from 'express';

import { validateUser } from './validateUser';

describe('validate User middleware', () => {
  const response = {} as Response;
  const next = jest.fn();

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn();
  });

  it('should return 400 if no name is provide', () => {
    const httpRequest = {
      body: {
        senha: 'any_password',
        email: 'any_email',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message: 'o campo nome é obrigatório',
    });
  });

  it('should return 422 if name is not a string', () => {
    const httpRequest = {
      body: {
        nome: 12345,
        senha: 'any_password',
        email: 'any_password',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({
      message: 'nome precisa ser no formato string',
    });
  });

  it('should return 400 if no email is provide', () => {
    const httpRequest = {
      body: {
        nome: 'any_name',
        senha: 'any_password',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message: 'o campo email é obrigatório',
    });
  });

  it('should return 422 if email is invalid', () => {
    const httpRequest = {
      body: {
        nome: 'any_name',
        senha: 'any_password',
        email: 'invalid_email',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({
      message: 'formato do campo email invalido',
    });
  });

  it('should return 422 if email is not a string', () => {
    const httpRequest = {
      body: {
        nome: 'any_name',
        senha: 'any_password',
        email: 98754,
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({
      message: 'email precisa ser no formato string',
    });
  });

  it('should return 400 if no password is provide', () => {
    const httpRequest = {
      body: {
        nome: 'any_name',
        email: 'any_email@gmail.com',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message: 'o campo senha é obrigatório',
    });
  });

  it('should return 422 if password is not a string', () => {
    const httpRequest = {
      body: {
        nome: 'any_name',
        senha: 78797987987,
        email: 'any_email@gmail.com',
      },
    } as Request;

    validateUser(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(422);
    expect(response.json).toHaveBeenCalledWith({
      message: 'senha precisa ser no formato string',
    });
  });
});
