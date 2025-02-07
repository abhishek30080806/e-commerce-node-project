// 📌 order.routes.js (Order Routes with Validation)
import express from "express";
import { getOrders, getOrderById, createOrder, updateOrderStatus, deleteOrder } from "../controllers/order.controller.js";
import { validateOrderCreate, validateOrderUpdate } from "../validators/order.validator.js";

const orderRoutes = express.Router();

orderRoutes.get("/", getOrders);
orderRoutes.get("/:id", getOrderById);
orderRoutes.post("/", validateOrderCreate, createOrder);
orderRoutes.put("/:id", validateOrderUpdate, updateOrderStatus);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;