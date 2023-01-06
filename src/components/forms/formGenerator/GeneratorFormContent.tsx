import React, { useState } from "react";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { Model } from "../../../interfaces/generatorForm/Model";
import { ModelForm } from "../modelForm";
import {
  Box,
  Button,
  Divider,
  Flex,
  Spacer,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
const GeneratorFormContent = () => {
  const { setValue, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: constants.FIELDS.models,
  });

  const addNewModel = () => {
    append({
      name: "",
      fields: [],
    } as Model);
  };
  console.log(fields);
  const removeModel = (fieldIndex: number) => () => {
    remove(fieldIndex);
  };
  return (
    <>
      <Box display={"flex"} pb={4}>
        <Spacer />
        <Button colorScheme="green" type="submit">
          Generar
        </Button>
      </Box>
      <Divider />
      <InputForm name={constants.FIELDS.name} w={"auto"} mt={2} />
      <Button colorScheme="blue" onClick={addNewModel} mt={2}>
        + nuevo modelo
      </Button>
      <Wrap p={2}>
        {fields.map((model, index) => (
          <ModelForm
            key={index}
            deleteAction={removeModel(index)}
            differentiator={index}
            model={model as unknown as Model}
          />
        ))}
      </Wrap>
    </>
  );
};
export default GeneratorFormContent;
