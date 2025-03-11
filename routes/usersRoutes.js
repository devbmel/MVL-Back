import express from "express";
import UsersController from "../controllers/usersController.js";
import { clearUserResponse } from "../middlewares/userResponseMiddleware.js";

const router = express.Router();
const usersController = new UsersController();

router.get("/:id", clearUserResponse, (req, res) =>
  usersController.getUserById(req, res)
);

export default router;
