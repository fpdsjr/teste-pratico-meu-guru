import { AppError } from '~/shared/errors/AppError';
import { NextFunction, Response, Request } from 'express';

import { errorHandle } from './errorHandle';

describe('Error Handle middleware', () => {
  const response = {} as Response;
  const request = {} as Request;
  const next = {} as NextFunction;
  const err = new Error('error unhandled');

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn();
  });

  it('should return a 500 error if its not an AppError instance', () => {
    errorHandle(err, request, response, next);

    expect(response.status).toBeCalledWith(500);
    expect(response.json).toBeCalledWith({
      status: 'error',
      message: 'internal server error - error unhandled',
    });
  });

  it('should return the message and code from AppError instance', () => {
    const error = new AppError('app error instance', 400);

    errorHandle(error, request, response, next);

    expect(response.status).toBeCalledWith(400);
    expect(response.json).toBeCalledWith({
      message: 'app error instance',
    });
  });
});
