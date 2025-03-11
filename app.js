import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import booksRoutes from "./routes/booksRoutes.js";

const SERVER_PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [`${process.env.FRONT_URL}`],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
    credentials: true,
  })
);
app.use(helmet());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);

app.listen(SERVER_PORT, () => {
  console.info(`Server is running ${SERVER_PORT}`);
});
