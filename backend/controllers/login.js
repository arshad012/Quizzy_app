import { SignUp } from '../models/index.js';

export const loginUser = async (req, res, next) => {

    try {
        const { phone, password } = req.body;

        if (!phone) {
            return next(new Error('Phone number is required to Login'));
        }

        if (!password) {
            return next(new Error('Password is required to Login'));
        }

        const user = await SignUp.findOne({ phone });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        if (user.password != password) {
            return res.status(401).json({
                success: false,
                message: 'Wrong password'
            })
        }

        return res.status(200).json({
            success: true,
            data: user
        })

    } catch (e) {
        const error = new Error('Failed to login', {
            casue: e
        })

        return next(error);
    }
}