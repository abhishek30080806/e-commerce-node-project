// 📌 auth.routes.js (Authentication Routes with Validation)
import express from "express";
import { login, refreshToken, register } from "../controllers/auth.controller.js";
import { validateLogin, validateRegister } from "../validators/auth.validator.js";

const authRoutes = express.Router();

authRoutes.post("/login", validateLogin, login);
authRoutes.post("/register", validateRegister, register);
authRoutes.post("/refreshToken", refreshToken)

export default authRoutes;