// 📌 auth.service.js (Authentication Service)
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import { generateAccesTokens, generateTokens } from "../utils/token.helper.js";
import { comparePassword, hashPassword } from "../utils/password.helper.js";
import { errorHandler } from "../middlewares/error.middleware.js";
import { config } from "../config/env.js";


export const login = async (req) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user || !(await comparePassword(password, user.password))) {  // ✅ Use comparePassword
      return { error: "Invalid Credentials" };
    }

    user = { ...user.toObject() };
    delete user.password;
    delete user.__v;
    user._id = user._id.toString();

    const { accessToken, refreshToken } = generateTokens(user);

    return { user, accessToken, refreshToken };
  }
  catch (err) {
    errorHandler(err)
  }
};


const register = async (name, email, password) => {
  try {
    // Check if user already exists
    if (await User.exists({ email })) {
      throw new Error("User already exists");
    }

    // Hash password before saving
    const hashedPassword = await hashPassword(password);

    // Create user document
    const user = await User.create({ name, email, password: hashedPassword });

    return { user: user.toObject({ versionKey: false }) };  // Remove __v field
  } catch (error) {
    console.error("Register Error:", error);
    throw new Error("Registration failed. Please try again.");
  }
};


const refreshTokenService = (token) => {
  try {
    const decoded = jwt.verify(token, config.REFRESH_SECRET);  // Decode using refresh token secret
    const userId = decoded.id;  // Extract the user ID from the refresh token
    const { accessToken } = generateAccesTokens({ _id: userId });  // Generate only access token
    return accessToken;
  }
  catch (err) {
    console.log("error------:",err)
    errorHandler(err)
  }

}

export default { login, register, refreshTokenService };



