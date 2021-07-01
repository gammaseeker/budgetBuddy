import mongoose, { mongo } from "mongoose";
import IExpense from "../interfaces/IExpense";

const Expense = new mongoose.Schema({
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
    }
});

export default mongoose.model<IExpense & mongoose.Document>("Expense", Expense);
