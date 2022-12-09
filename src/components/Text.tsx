import { TextProps, Text as _Text } from "@mantine/core";

const ErrorText = (props: TextProps) => {
  return (
    <_Text size="lg" weight="bold" color="red">
      {props.children}
    </_Text>
  );
};

const DimText = (props: TextProps) => {
  return (
    <_Text fz="md" color="dimmed">
      {props.children}
    </_Text>
  );
};

export const Text = (props: TextProps) => <DimText {...props} />;
Text.Dim = DimText;
Text.Error = ErrorText;
