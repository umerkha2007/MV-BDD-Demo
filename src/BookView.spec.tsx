import { render, screen } from "@testing-library/react";
import BookView from "./BookView";
import {
  failedBooklistRequest,
  successfulBookListRequest,
} from "./msw/handlers";

describe("Test succcessful booklist request", () => {
  beforeEach(() => successfulBookListRequest());
  it("Should render all books in response in card components", async () => {
    render(<BookView />);
    const bookNode = await screen.findAllByTestId("book-card");
    await screen.findByText("Middlemarch");
    expect(bookNode).toHaveLength(3);
  });
});

describe("Test failed booklist request", () => {
  beforeEach(() => failedBooklistRequest());
  it("Should render the appropriate error text", async () => {
    render(<BookView />);

    const errorNode = await screen.findByText(
      "An error occurred. Please try again later",
    );

    expect(errorNode).toBeDefined();
  });
});
