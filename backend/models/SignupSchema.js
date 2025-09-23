import { model, Schema } from "mongoose";
import { userTypesEnum } from '../types/index.js';

const SignupSchema = new Schema({
    userType: {
        type: String,
        enum: Object.values(userTypesEnum),
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const SignUp = model('SignUp', SignupSchema);