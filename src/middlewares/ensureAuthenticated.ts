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
  try {
    const [, token] = req.headers.authorization?.split(' ');

    if (!token) {
      throw new Error('');
    }

    const { sub } = verify(token, process.env.PRIVATE_KEY) as Payload;

    req.locals = {
      userId: sub,
    };

    return next();
  } catch (e) {
    console.log(e.message);

    throw new Error('Invalid token.');
  }
};

export default ensureAuthenticated;
