## User Story

As a user, I want to view an ordered list of books from Project Gutenberg and download different versions

## Out-of-scope

- Downloading a book version onto the local machine

## Acceptance Criteria

- Display books from the Gutenberg api in card components order by number of downloads (descending)
- The card should contain the following information:

  - The title of the book - truncated with an ellipsis after 3 lines
  - The first author in the lists name
  - The download count like `Downloads: {{count}}`

- The card should contain a button for downloading that book
- If an API error occurs:
  - No books should be shown
  - The text `An error occurred. Please try again later` should be displayed
