import express from "express";
import AuthController from "../controllers/authController.js";
import { clearUserResponse } from "../middlewares/userResponseMiddleware.js";

const router = express.Router();
const authController = new AuthController();

router.post("/register", clearUserResponse, (req, res) =>
  authController.register(req, res)
);
router.post("/login", clearUserResponse, (req, res) =>
  authController.login(req, res)
);
router.get("/logout", (req, res) => authController.logout(req, res));

export default router;
