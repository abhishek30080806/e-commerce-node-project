import { jwt } from '../core/dependencies.js';
import { User } from '../models/index.js';
import { sendResponse } from './errorHandler.js';

export const protectRoute = async (req, res, next) => {
    let token = req.headers.authorization;  // Extract token from Bearer header
    if (!token)
        return sendResponse(res, 401, null, 'Unauthorized User !!!'); // Handle response with sendResponse
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        const userExists = await User.exists({ _id: decoded.id });
        if (!userExists)
            return sendResponse(res, 401, null, 'Invalid Token !!!'); // Handle response with sendResponse
        req.userId = decoded.id;
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        if (error.name === 'TokenExpiredError')
            return sendResponse(res, 403, null, 'Token Expired Please Use Refresh Token !!!'); // Handle token expired error
        next(error);  // Pass error to the global error handler
    }
};