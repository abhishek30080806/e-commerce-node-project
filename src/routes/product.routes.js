// 📌 product.routes.js (Product Routes with Validation)
import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import { validateProductCreate, validateProductUpdate } from "../validators/product.validator.js";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", validateProductCreate, createProduct);
productRoutes.put("/:id", validateProductUpdate, updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
