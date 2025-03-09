import express from "express";
import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen(SERVER_PORT, () => {
  console.info(`Server is running ${SERVER_PORT}`);
});
