import express from 'express';
import cors from 'cors';

import { filmRouter } from './routes/films.routes.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(filmRouter);