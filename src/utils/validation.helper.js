// 📌 validation.helper.js (Reusable Validation Handler)
import { validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => err.msg) // Return only messages
    });
  }
  next();
};
