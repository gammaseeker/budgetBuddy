import { Schema, model } from "mongoose";
import IUser from "../interfaces/IUser";

const userSchema = new Schema<IUser>({
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

const User = model<IUser>('User', userSchema);
export default User;
