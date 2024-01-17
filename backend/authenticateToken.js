import jwt from 'jsonwebtoken';
import env from './environment.js';
const {SECRET_KEY} = env;
// Middleware to check JWT token on protected routes
export const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token.replace("Bearer ", ""), SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};
