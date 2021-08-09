import { NextFunction, Request, Response } from 'express';

const handleErrors = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(error);

  if (error instanceof Error) {
    return response.status(400).json({ error: error.message });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

export default handleErrors;
