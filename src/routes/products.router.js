import { Router } from "express";
import productDao from "../dao/mongoDao/product.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await productDao.getAll();
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productDao.getById(pid);
    if (!product) {
      return res.status(404).json({
        status: "Error",
        msg: `Producto con el id ${pid} no encontrado`,
      });
    }

    res.status(200).json({ status: "success", payload: product });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await productDao.create(product);
    res.status(201).json({ status: "success", payload: newProduct });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

router.put("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const productData = req.body;
    const updateProduct = await productDao.update(pid, productData);
    if (!updateProduct) {
      return res.status(404).json({
        status: "Error",
        msg: `Producto con el id ${pid} no encontrado`,
      });
    }

    res.status(200).json({ status: "success", payload: updateProduct });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productDao.deleteOne(pid);
    if (!product) {
      return res.status(404).json({
        status: "Error",
        msg: `Producto con el id ${pid} no encontrado`,
      });
    }

    res.status(200).json({ status: "success", payload: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;