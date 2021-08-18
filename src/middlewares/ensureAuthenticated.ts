import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string;
};

const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new Error('Missing token.');
  }

  const [, token] = req.headers.authorization?.split(' ');

  try {
    const { sub } = verify(token, process.env.PRIVATE_KEY) as Payload;

    res.locals.auth = {
      userId: sub,
    };
  } catch (err) {
    throw new Error('Invalid token.');
  }

  return next();
};

export default ensureAuthenticated;
