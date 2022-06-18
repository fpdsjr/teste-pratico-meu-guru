import { NextFunction, Request, Response } from 'express';

import { joiListUserSchema } from '../schemas/listQueries';

const validateQueries = (request: Request, response: Response, next: NextFunction) => {
  const { error } = joiListUserSchema.validate(request.query);

  if (error) {
    const [code, message] = error.message.split('|');

    return response.status(Number(code)).json({ message });
  }

  return next();
};

export { validateQueries };
