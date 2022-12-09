import { ButtonProps, Button as _Button } from "@mantine/core";

type Props = ButtonProps & React.ComponentPropsWithoutRef<"button">;

export const Button = (props: Props) => (
  <_Button
    fullWidth
    variant="outline"
    color="teal"
    mt={14}
    sx={{ alignSelf: "flex-end" }}
    {...props}
  >
    {props.children}
  </_Button>
);
