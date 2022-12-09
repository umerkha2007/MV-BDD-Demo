import { books, orderedBooks } from "../../constants";
import { IBook, IBookStore } from "../../types";
import { BookStore } from "../stores/BookStore";

describe("BookStore", () => {
  let bookStore: IBookStore;
  beforeEach(() => {
    bookStore = new BookStore();
    bookStore.setBooks(books as IBook[]);
  });
  it("value returned by most popular should be equal to orderedBooks", () => {
    const mostPopularBooks = bookStore.mostPopular;
    expect(mostPopularBooks).toEqual(orderedBooks);
  });
});
