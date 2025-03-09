import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();
const authController = new AuthController();

router.post("/register", (req, res) => authController.register(req, res));

export default router;
