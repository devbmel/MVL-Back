import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(SERVER_PORT, () => {
  console.info(`Server is running ${SERVER_PORT}`);
});
