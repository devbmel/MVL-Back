import BooksService from "../services/booksService.js";

class BooksController {
  constructor() {
    this.booksService = new BooksService();
  }

  async getBooksByTitle(req, res) {
    const { title } = req.params;
    try {
      const books = await this.booksService.getBooksByTitle(title);
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      throw new error();
    }
  }
}

export default BooksController;
