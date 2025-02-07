// 📌 user.routes.js (User Routes with Validation)
import express from "express";
import { getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validateUserUpdate } from "../validators/user.validator.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.put("/:id", validateUserUpdate, updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
