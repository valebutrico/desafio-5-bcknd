import { Router } from "express";
import productsRouters from "./products.router.js";
import cartsRouters from "./carts.router.js";
import chatRouter from "./chat.router.js";
const router = Router();

router.use("/products", productsRouters);
router.use("/carts", cartsRouters);
router.use("/chat", chatRouter);

export default router;
