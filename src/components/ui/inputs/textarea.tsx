import { Text, Textarea } from "@mantine/core";
import { inputStylesAlt } from "./inputStyles";

export function ContainedInputAreas({
  label,
  placeholder,
  mt,
  mb,
  mr,
  ml,
  setValue,
  value,
  minr,
  override = false,
  mutator,
  lim,
}: {
  label: string;
  placeholder: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  minr?: number;
  setValue?: (value: string) => void;
  value?: string;
  override?: boolean;
  mutator?: (value: string) => void;
  lim?: boolean;
}) {
  return (
    <>
      <Textarea
        maxLength={100}
        value={value}
        autosize
        minRows={minr || 1}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          !override
            ? setValue?.(event.currentTarget.value)
            : mutator?.(event.currentTarget.value)
        }
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        label={label}
        placeholder={placeholder}
        styles={inputStylesAlt}
      />
      {lim && <Text size="xs" mt={5} c="dimmed">Maximum of 100 characters are allowed</Text>}
    </>
  );
}
