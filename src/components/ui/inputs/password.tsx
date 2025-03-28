import { TextInput } from "@mantine/core";
import { inputStyles } from "./inputStyles";

export function ContainedPassword({
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
  value?: string;
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
        type="password"
        label={label}
        placeholder={placeholder}
        styles={inputStyles}
      />
    </>
  );
}
