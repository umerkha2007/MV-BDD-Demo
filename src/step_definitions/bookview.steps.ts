import { defineFeature, loadFeature } from 'jest-cucumber';
import { books, orderedBooks } from "../../constants";
import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { IBook, IBookStore } from '../../types';
import { BookStore } from '../stores/BookStore';


// Scenarios
const bookViewFeature = loadFeature("../features/bookview.feature");

defineFeature(bookViewFeature, test => {
  let url = "";
  let bookStore: IBookStore;
  beforeEach(() => {
    bookStore = new BookStore();
    bookStore.setBooks(books as IBook[]);
  });
// Homepage shows List of Books in Descending order of Number of downloads
  test('Homepage shows List of Books in Descending order of Number of downloads', ({ given, when, then, and }) => {

    given(/^Books exist in the database$/, () => {
      expect(bookStore.books).toBeDefined();
    })

    when(/^User Visits the home url$/, () => {
      expect(global.window.location.pathname).toContain('/home');
    })

    then(/^System should display Each Book in Card components$/, async () => {
      expect(url).toContain('home');
      // render(<BookView />);
      const cardComponent = await screen.findByText("Middlemarch");
      expect(cardComponent).toBeDefined();
    })

    then(/^Each book should be displayed by the order of number of downloads$/, () => {
      expect(url).toContain('home');
      // render(<BookView />);
      const mostPopularBooks = bookStore.mostPopular;
      expect(mostPopularBooks).toEqual(orderedBooks);
    })

    then(/^Each book has a title, download count, first author$/, async () => {
      expect(bookStore.books.filter(e => e.title && e.download_count && e.authors).length < bookStore.books.length)
    })

    // then(/^title should be truncated with an ellipsis after 3 lines$/, async () => {
      
    // })
    
  });
});
