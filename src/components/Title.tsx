import { Title as _Title, TitleProps } from "@mantine/core";

const H1 = (props: TitleProps) => (
  <_Title my={18} order={1} {...props}>
    Book List
  </_Title>
);

const H2 = (props: TitleProps) => (
  <_Title order={2} size="h3" color="teal" {...props}>
    {props.children}
  </_Title>
);

const H3 = (props: TitleProps) => (
  <_Title order={3} size="h5" {...props}>
    {props.children}
  </_Title>
);

export const Title = (props: TitleProps) => <H1 {...props} />;
Title.H1 = H1;
Title.H2 = H2;
Title.H3 = H3;
