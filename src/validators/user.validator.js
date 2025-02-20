import { body } from "express-validator";
import { handleValidationErrors } from "../utils/validation.helper.js";

export const validateUserUpdate = [
    body("name").notEmpty().withMessage("Name is required"),
    body('email')
        .notEmpty().withMessage('Email is required')
        .bail()  // Stop further validation if empty
        .isEmail().withMessage('Please Enter Valid Email Id'),
    handleValidationErrors
];
