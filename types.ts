import { ComputedValue } from "mobx/dist/internal";

export interface APIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  bookshelves?: string[];
  download_count: number;
  formats?: Formats;
}

export interface IBookStore {
  books: IBook[];
  loadBooks: () => Promise<void>;
  setBooks: (books: IBook[]) => void;
  setLoading: (value: boolean) => void;
  setError: (value: boolean) => void;
  mostPopular: IBook[];
}

export interface IBookService {
  getBooks: () => Promise<APIResponse<IBook>>;
}

export interface IAuthor {
  name: string;
  birth_year?: number;
  death_year?: number;
}

export type Formats = Partial<{
  "application/x-mobipocket-ebook": string;
  "application/epub+zip": string;
  "text/html": string;
}>;
