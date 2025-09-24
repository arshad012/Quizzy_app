import { SignUp } from "../models/index.js";
import bcrypt from 'bcrypt';

export const signupUser = async (req, res) => {

    const { userType, name, phone, password } = req.body;
    if (!name) {
        return res.status(401).json({ message: "Name is required" });
    }
    if (!phone) {
        return res.status(401).json({ message: "Phone number is required" });
    }
    if (!userType) {
        return res.status(401).json({ message: "User type is required" });
    }
    if (!password) {
        return res.status(401).json({ message: "Password is required" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new SignUp({...req.body, password: hashedPassword});
        await newUser.save();

        return res.status(200).json({
            success: true,
            data: newUser
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
}