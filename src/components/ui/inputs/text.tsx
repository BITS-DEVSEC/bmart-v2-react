import { TextInput } from "@mantine/core";
import { inputStyles } from "./inputStyles";

export function ContainedInputs({
  label,
  placeholder,
  mt,
  mb,
  mr,
  ml,
  setValue,
  value,
  override = false,
  mutator,
}: {
  label: string;
  placeholder: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  setValue?: (value: string) => void;
  value?: string | number;
  override?: boolean;
  mutator?: (value: string) => void;
}) {
  return (
    <>
      <TextInput
        value={value}
        onChange={(e) =>
          !override ? setValue?.(e.target.value) : mutator?.(e.target.value)
        }
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        label={label}
        placeholder={placeholder}
        styles={inputStyles}
      />
    </>
  );
}
