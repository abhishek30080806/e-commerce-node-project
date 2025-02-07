import jwt from 'jsonwebtoken'
import { config } from '../config/env';

export const generateTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, config.ACCESS_SECRET, { expiresIn: '10m' });
    const refreshToken = jwt.sign({ id: user._id }, config.REFRESH_SECRET, { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};

export const generateAccesTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, config.ACCESS_SECRET, { expiresIn: '10m' });
    console.log('access token ------_:',accessToken)
    return { accessToken };  // Only return access token, no refresh token
};
