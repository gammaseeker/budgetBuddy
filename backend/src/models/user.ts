import mongoose, { mongo } from "mongoose";
import IUser from "../interfaces/IUser";

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }}
);

export default mongoose.model<IUser & mongoose.Document>("User", User);
