import cors from 'cors';
import express from 'express';
import {json, urlencoded} from 'body-parser';
import { router } from './routes/index';
import incomeRouter from './routes/income';
import expenseRouter from './routes/expense';
import { connect } from './database';

// Create a new express app instance
const app: express.Application = express();

// Enable CORS
app.use(cors());

// Parses incoming requests as JSON if parsable
app.use(json());
app.use(urlencoded({ extended: true }));

// Associate router with application
app.use('/', router);
app.use('/api/income', incomeRouter);
app.use('/api/expense', expenseRouter);

connect();

export default app;