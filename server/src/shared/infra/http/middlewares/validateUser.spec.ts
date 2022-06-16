import { NextFunction, Request, Response } from 'express';

import { validateUser } from './validateUser';

describe('validate User middleware', () => {
  const response = {} as Response;
  const next = {} as NextFunction;

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn();
  });

  it('should return 400 if no name is provided', () => {
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
});
