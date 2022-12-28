import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";
import { useController } from "react-hook-form";

interface CustomFieldProps {
  className?: string;
  classNameInput?: string;
  name: string;
  type?: string;
  label?: string;
  inputProps?: {};
  multiline?: boolean;
  isDisabled?: boolean;
}

const InputForm: FC<CustomFieldProps> = ({
  className = "textField",
  classNameInput = "input",
  name,
  type = "text",
  label = name,
  inputProps = {},
  multiline = false,
  isDisabled = false,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name });

  return (
    <FormControl isInvalid={error ? true : false}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        id={name}
        placeholder={name}
        isInvalid={error ? true : false}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputForm;
