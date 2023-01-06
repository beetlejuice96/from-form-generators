import {
  FormControl,
  FormErrorMessage,
  Select,
  SelectProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useController } from "react-hook-form";

interface CustomSelectProps extends SelectProps {
  name: string;
  options: { value: any; label: string }[];
}

const SelectForm: FC<CustomSelectProps> = (props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name: props.name });
  return (
    <FormControl isInvalid={error ? true : false}>
      <Select
        id={props.name}
        placeholder={props.name}
        isInvalid={error ? true : false}
        value={value}
        onChange={onChange}
        {...props}
      >
        {props.options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </Select>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectForm;
