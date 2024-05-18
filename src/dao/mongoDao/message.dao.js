import { messageModel } from "../models/message.model.js";

const getAllMessages = async () => {
  const messages = await messageModel.find();
  return messages;
};

const createMessage = async (data) => {
  const message = await messageModel.create(data);
  return message;
};

export default {
  getAllMessages,
  createMessage,
};
