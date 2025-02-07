
import authService from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const authData = await authService.login(req);
    if (authData.error) return res.status(401).json({ message: authData.error });
    res.cookie("refreshToken", authData.refreshToken, { httpOnly: true, secure: true });
    return res.json({ accessToken: authData.accessToken, user: authData.user, message: 'Login Successful !!!' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await authService.register(name, email, password);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const refreshToken = (req, res) => {

  const token = req?.cookies?.refreshToken;  // Extract refresh token from cookies
  if (!token)
    return res.status(403).json({ message: 'Refresh Token Required !!!' });

  try {
    const accessToken = authService.refreshTokenService(token)
    return res.status(200).json({ accessToken, message: 'Access Token Generate Successfylly !!!' });
  } catch (err) {
    return res.status(402).json({ statusCode: 402, message: 'Refresh Token Expired Or Invalid !!!' }); sendResponse(res, 401, null, '');
  }
};