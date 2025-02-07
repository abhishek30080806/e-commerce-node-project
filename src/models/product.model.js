// 📌 product.model.js (Product Schema)
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;