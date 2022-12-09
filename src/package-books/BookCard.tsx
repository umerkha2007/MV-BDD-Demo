import { Card, Flex } from "@mantine/core";
import { Formats, IAuthor } from "../../types";
import { Title, Text, Button } from "../components";

interface BookCardProps {
  title: string;
  authors: IAuthor[];
  download_count: number;
  formats?: Formats;
  onDownload?: (formats: Formats) => void;
}

export const BookCard = ({
  title,
  authors,
  download_count,
  formats,
  onDownload,
  ...props
}: BookCardProps) => {
  const [{ name }] = authors;
  return (
    <Card
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
      sx={{ maxWidth: "500px" }}
      {...props}
    >
      <Flex
        direction={"column"}
        gap="md"
        justify={"space-between"}
        sx={{ height: "100%" }}
      >
        <Title.H2 data-testid="book-title" title={title} lineClamp={3}>
          {title}
        </Title.H2>
        <div>
          <Title.H3>{name}</Title.H3>
          <Text>Downloads: {download_count}</Text>
        </div>
        <Button onClick={() => onDownload(formats)}>Download</Button>
      </Flex>
    </Card>
  );
};
