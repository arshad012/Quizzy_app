import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: 'No headers found',
            })
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: 'No token found',
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.userId;
        next();
    } catch (error) {
        res.status(401).json({
            message: error.message,
            authenticationFailed: true
        })
    }
}