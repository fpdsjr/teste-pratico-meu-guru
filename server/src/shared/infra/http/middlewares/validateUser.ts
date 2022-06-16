import { NextFunction, Request, Response } from 'express';

import { joiUserSchema } from '../schemas/user';

const validateUser = (request: Request, response: Response, next: NextFunction) => {
  const { error } = joiUserSchema.validate(request.body);

  if (error) {
    const [code, message] = error.message.split('|');

    return response.status(Number(code)).json({ message });
  }

  return next();
};

export { validateUser };
