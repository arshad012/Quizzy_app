import { SignUp } from "../models/index.js";

export const signupUser = async (req, res, next) => {

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
        const newUser = new SignUp(req.body);
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