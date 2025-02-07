import { body } from "express-validator";
import { handleValidationErrors } from "../utils/validation.helper.js";

export const validateLogin = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  handleValidationErrors
];

export const validateRegister = [
  body("name").notEmpty().withMessage("Name is required"),
  body('email')
    .notEmpty().withMessage('Email is required')
    .bail()  // Stop further validation if empty
    .isEmail().withMessage('Please Enter Valid Email Id'),
  body("password")
    .notEmpty().withMessage('Password is required')
    .bail()
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  handleValidationErrors
];
