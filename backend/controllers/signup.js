import { SignUp } from "../models/index.js";

export const signupUser = async (req, res, next) => {

    try {
        const newUser = new SignUp(req.body);
        await newUser.save();

        return res.status(200).json({
            success: true,
            data: newUser
        })
    } catch (e) {
        const error = new Error('Failed to Signup', {
            cause: e
        })
        return next(error);
    }
}