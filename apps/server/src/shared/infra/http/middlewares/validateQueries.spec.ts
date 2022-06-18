import { Request, Response } from 'express';

import { validateQueries } from './validateQueries';

describe('Validate Queries middleware', () => {
  const response = {} as Response;
  const next = jest.fn();

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn();
  });

  it('should return 400 if no page query is provide', () => {
    const httpRequest = {
      query: {
        limit: '10',
      } as unknown,
    } as Request;

    validateQueries(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message: 'o campo page é obrigatório',
    });
  });

  it('should return 400 if no limit  is provide', () => {
    const httpRequest = {
      query: {
        page: '0',
      } as unknown,
    } as Request;

    validateQueries(httpRequest, response, next);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message: 'o campo limit é obrigatório',
    });
  });

  it('should call the next function when the queries is provided correctly', () => {
    const httpRequest = {
      query: {
        page: '0',
        limit: '10',
      } as unknown,
    } as Request;

    validateQueries(httpRequest, response, next);

    expect(next).toHaveBeenCalled();
  });
});
