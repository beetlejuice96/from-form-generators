import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { useController } from "react-hook-form";

interface CustomFieldProps extends InputProps {
  name: string;
}

const InputForm: FC<CustomFieldProps> = (props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name: props.name });

  return (
    <FormControl isInvalid={error ? true : false} {...props}>
      <Input
        id={props.name}
        placeholder={props.name}
        isInvalid={error ? true : false}
        value={value}
        onChange={onChange}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputForm;
