import { render } from "@testing-library/react";
import { IBook } from "../../types";
import { BookCard } from "./BookCard";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { shortString } from "../../constants";

const formats = { "application/epub+zip": "http://my-epub-download-link.epub" };

const getBookProps = (title?: string): IBook => ({
  title: title ?? shortString,
  id: 1,
  authors: [{ name: "Lewis, CS" }, { name: "Fielding, Henry" }],
  download_count: 435,
  formats,
});

describe("<BookCard />", () => {
  it.only("Displays the first author from the array of authors", () => {
    render(<BookCard {...getBookProps()} />);
    const authorNode = screen.getByText("Lewis, CS");
    expect(authorNode).toBeDefined();
  });

  it("display download count as expected", async () => {
    render(<BookCard {...getBookProps()} />);
    const downloadCountNode = screen.getByText("Downloads", { exact: false });
    screen.debug(downloadCountNode);
    expect(downloadCountNode).toHaveTextContent("435");
  });

  it("onDownload is called with formats as expected", async () => {
    const onDownload = jest.fn();
    userEvent.setup();
    render(<BookCard {...getBookProps()} onDownload={onDownload} />);
    const downloadBtn = screen.getByRole("button");

    await userEvent.click(downloadBtn);
    expect(onDownload).toBeCalledTimes(1);
    expect(onDownload).toBeCalledWith(formats);
  });
});
