import express, { Router } from "express";
import * as controllers from "../controllers/expense";

const expense: Router = express.Router();

expense.get('/getAll', controllers.getAll);
expense.get('/getByEmail', controllers.getByEmail);
expense.post('/create', controllers.createExpense);
expense.put('/update', controllers.updateExpense);
expense.delete('/delete', controllers.deleteExpense);
export default expense;