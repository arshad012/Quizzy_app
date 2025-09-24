import { SignUp } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const loginUser = async (req, res) => {

    try {
        const { phone, password } = req.body;

        if (!phone) {
            return res.status(401).json({ message: "Phone number is required to Login" });
        }

        if (!password) {
            return res.status(401).json({ message: "Password is required to Login" });
        }

        const user = await SignUp.findOne({ phone });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: 'Wrong password'
            })
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        return res.status(200).json({
            success: true,
            data: {
                token,
                data: user
            }
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}