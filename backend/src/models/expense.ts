import { Schema, model } from "mongoose";
import IExpense from "../interfaces/IExpense";

const expenseSchema = new Schema<IExpense>({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    expenseType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Expense = model<IExpense>('Expense', expenseSchema);
export default Expense;
