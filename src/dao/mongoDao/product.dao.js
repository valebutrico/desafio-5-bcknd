import { productModel } from "../models/product.model.js";

const getAll = async () => {
  const products = await productModel.find();
  return products;
};

const getById = async (id) => {
  const product = await productModel.findById(id);
  return product;
};

const create = async (data) => {
  // Verificar unicidad del código
  const existingProduct = await productModel.findOne({ code: data.code });
  if (existingProduct) {
    throw new Error(`El producto con el código ${data.code} ya existe.`);
  }

  const product = await productModel.create(data);
  return product;
};

const update = async (id, data) => {
  const product = await productModel.findByIdAndUpdate(id, data, { new: true });
  return product;
};

const deleteOne = async (id) => {
  const product = await productModel.deleteOne({ _id: id });
  if (product.deletedCount === 0) return false;
  return true;
};

export default {
  getAll,
  getById,
  create,
  update,
  deleteOne,
};