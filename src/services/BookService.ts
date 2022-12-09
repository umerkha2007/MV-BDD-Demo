import { apiUrl } from "../../constants";
import { IBookService } from "../../types";

export class BookService implements IBookService {
  async getBooks() {
    try {
      const response = await fetch(`${apiUrl}/books`);
      if (!response.ok) {
        throw new Error("Error when fetching book list");
      }
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
