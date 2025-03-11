import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();
const booksController = new BooksController();

router.get("/:title", (req, res) => booksController.getBooksByTitle(req, res));

export default router;
