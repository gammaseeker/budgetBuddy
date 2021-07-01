import mongoose, { mongo } from "mongoose";
import IIncome from "../interfaces/IIncome";

const Income = new mongoose.Schema({
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

export default mongoose.model<IIncome & mongoose.Document>("Income", Income);



