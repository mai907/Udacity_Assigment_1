import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRouter from './src/routes/index';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the home page!');
});
app.use('/api',apiRouter);

export default app;