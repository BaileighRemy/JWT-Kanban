import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log("Token received:", token); // Log the token
        const secretKey = process.env.JWT_SECRET_KEY || 'fiori12';
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                console.error("Token verification failed:", err); // Log the error
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            console.log("User authenticated:", req.user); // Log the authenticated user
            return next();
        });
    }
    else {
        console.log("No token provided");
        res.sendStatus(401); // Unauthorized
    }
};
