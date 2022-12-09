import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { BookStore } from "./stores/BookStore";
import { BookCard } from "./package-books/BookCard";
import { Container, SimpleGrid } from "@mantine/core";
import { Title, Text, Loader } from "./components";

const bookStore = new BookStore();

function BookView() {
  useEffect(() => {
    bookStore.loadBooks();
  }, []);

  if (bookStore.loading) return <Loader />;

  const books = bookStore.mostPopular.map((book) => (
    <BookCard
      data-testid="book-card"
      key={book.id}
      title={book.title}
      authors={book.authors}
      download_count={book.download_count}
      formats={book.formats}
      onDownload={(formats) => console.log(formats)}
    />
  ));

  return (
    <Container size="xl">
      <Title>Book List</Title>
      {bookStore.error ? (
        <Text.Error>An error occurred. Please try again later</Text.Error>
      ) : (
        <SimpleGrid cols={3}>{books}</SimpleGrid>
      )}
      {/* <BookCard
        key={1}
        title={"test"}
        authors={[{ name: "test" }]}
        download_count={34}
      /> */}
    </Container>
  );
}

export default observer(BookView);
