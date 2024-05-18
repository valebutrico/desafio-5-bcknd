import mongoose from "mongoose";

const urlDb = "";

export const connectMongoDB = async () => {
	try {
		mongoose.connect(urlDb);
		console.log("Mongo DB Conectado");
	} catch (error) {
		console.log(error);
	}
};