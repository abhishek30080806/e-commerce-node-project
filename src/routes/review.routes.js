// 📌 review.routes.js (Review Routes with Validation)
import express from "express";
import { getReviews, getReviewById, addReview, updateReview, deleteReview } from "../controllers/review.controller.js";
import { validateReviewCreate, validateReviewUpdate } from "../validators/review.validator.js";

const reviewRoutes = express.Router();

reviewRoutes.get("/", getReviews);
reviewRoutes.get("/:id", getReviewById);
reviewRoutes.post("/", validateReviewCreate, addReview);
reviewRoutes.put("/:id", validateReviewUpdate, updateReview);
reviewRoutes.delete("/:id", deleteReview);

export default reviewRoutes;