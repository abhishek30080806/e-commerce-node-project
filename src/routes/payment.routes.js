// 📌 payment.routes.js (Payment Routes with Validation)
import express from "express";
import { processPayment, getPaymentById, getAllPayments, refundPayment } from "../controllers/payment.controller.js";
import { validatePayment, validateRefund } from "../validators/payment.validator.js";

const paymentRoutes = express.Router();

paymentRoutes.get("/", getAllPayments);
paymentRoutes.get("/:id", getPaymentById);
paymentRoutes.post("/", validatePayment, processPayment);
paymentRoutes.post("/refund/:id", validateRefund, refundPayment);

export default paymentRoutes;