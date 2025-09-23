import { SignUp } from '../models/index.js';

export const loginUser = async (req, res) => {

    try {
        const { phone, password } = req.body;

        if (!phone) {
            return res.status(401).json({message: "Phone number is required to Login"});
        }

        if (!password) {
            return res.status(401).json({message: "Password is required to Login"});
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

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}