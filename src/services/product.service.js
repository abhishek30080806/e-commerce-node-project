
// 📌 product.service.js (Product Service Layer)
import Product from "../models/product.model.js";

const getProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await new Product(data).save();
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default { getProducts, getProductById, createProduct, updateProduct, deleteProduct };