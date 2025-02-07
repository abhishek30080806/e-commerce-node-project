// 📌 auth.controller.js (Authentication Controller)
import authService from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const authData = await authService.login(req);
    if (authData.error) return sendResponse(res, 401, null, authData.error);
    res.cookie("refreshToken", authData.refreshToken, { httpOnly: true, secure: true });
    return res.json(response);

    // sendResponse(res, 200, { accessToken: authData.accessToken, user: authData.user, message: 'Login Successful !!!' }, '');
  } catch (err) {
    res.status(500).json({ message: error.message });
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