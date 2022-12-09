import { Loader as _Loader, LoaderProps } from "@mantine/core";

export const Loader = (props: LoaderProps) => {
  return (
    <_Loader
      size={"xl"}
      variant="bars"
      color={"teal"}
      sx={{ position: "absolute", top: "40%", left: "50%" }}
      {...props}
    />
  );
};
