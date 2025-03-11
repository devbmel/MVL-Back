class BooksService {
  constructor() {}

  async getBooksByTitle(title) {
    console.log(title);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`
      );
      if (!response.ok) {
        throw new Error("Books not fetch");
      }
      const data = await response.json();

      const booklist = data.docs.slice(0, 10).map((book) => ({
        title: book.title,
        author: book.author_name,
        cover: book.cover_i,
        cover_img_url: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
      }));
      return booklist;
    } catch (error) {
      console.error(error);
    }
  }
}

export default BooksService;
