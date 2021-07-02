import express, { Router } from "express";
import * as controllers from "../controllers/income";

const income: Router = express.Router();

income.get('/getAll', controllers.getAll);
income.get('/getByEmail', controllers.getByEmail);
income.post('/create', controllers.createIncome);
income.put('/update', controllers.updateIncome);
income.delete('/delete', controllers.deleteIncome);
export default income;