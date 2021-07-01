import { Schema, model } from "mongoose";
import IIncome from "../interfaces/IIncome";

const incomeSchema = new Schema<IIncome>({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Income = model<IIncome>('Income', incomeSchema);
export default Income;



