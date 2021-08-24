import 'reflect-metadata';
import { createConnection } from 'typeorm';

import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
createConnection();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(4000, () => console.log("Server is running.."));