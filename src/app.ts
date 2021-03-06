import express from 'express';
import 'express-async-errors';

import routes from './routes';
import { handleErrors } from './middlewares';

const app = express();

app.use(express.json());

app.use(routes);

app.use(handleErrors);

export default app;
