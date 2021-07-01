import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import {json, urlencoded} from 'body-parser';
import { router } from './src/routes/index';
import incomeRouter from './src/routes/income';

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

mongoose.connect('mongodb://localhost:27017/budgetbuddy', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to db');
});

app.listen(3001, function () {
    console.log('App is listening on port 3001!');
});