import jwt from 'jsonwebtoken'

export const generateTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, { expiresIn: '10m' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_SECRET, { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};

export const generateAccesTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, { expiresIn: '10m' });
    return { accessToken };  // Only return access token, no refresh token
};
