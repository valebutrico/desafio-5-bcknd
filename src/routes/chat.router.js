import { Router } from "express";
import messageDao from "../dao/mongoDao/message.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const messages = await messageDao.getAllMessages();
    res.render("chat", { messages });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { user, message } = req.body;
    const newMessage = await messageDao.createMessage({ user, message });
    res.status(201).json({ status: "success", payload: newMessage });
  } catch (error) {
    console.log(error);
  }
});

export default router;