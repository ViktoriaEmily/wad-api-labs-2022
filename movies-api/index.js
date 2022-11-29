import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import './db';
import './seedData';
import usersRouter from './api/users';
import genresRouter from './api/genres';


dotenv.config();

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.use(express.json());

app.use('/api/movies', moviesRouter);

app.use('/api/users', usersRouter);

app.use('/api/genres', genresRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});