import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { IBook, IBookService, IBookStore } from "../../types";
import { BookService } from "../services/BookService";

export class BookStore implements IBookStore {
  books: IBook[] = [];
  bookService: IBookService;
  loading: boolean = false;
  error: boolean = false;

  constructor() {
    this.bookService = new BookService();
    makeAutoObservable(this, {
      setBooks: action.bound,
      mostPopular: computed,
      setLoading: action.bound,
      setError: action.bound,
    });
  }

  async loadBooks() {
    runInAction(async () => {
      this.setLoading(true);
      try {
        const books = await this.bookService.getBooks();
        this.setBooks(books.results);
      } catch (error) {
        this.setError(true);
      } finally {
        this.setLoading(false);
      }
    });
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setBooks(books) {
    this.books = books;
  }

  setError(value: boolean) {
    this.error = value;
  }

  get mostPopular() {
    return [...this.books].sort((bookA, bookB) => {
      if (bookB.download_count > bookA.download_count) {
        return 1;
      }
      return -1;
    });
  }
}
