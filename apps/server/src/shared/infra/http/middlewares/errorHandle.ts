import { AppError } from '~/shared/errors/AppError';
import { Request, Response } from 'express';

export async function errorHandle(err: Error, _request: Request, response: Response): Promise<Response> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `internal server error - ${err.message}`,
  });
}
