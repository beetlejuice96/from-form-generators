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
import { useFieldArray } from "react-hook-form";
const GeneratorFormContent = () => {
  const { fields, append, remove } = useFieldArray({
    name: constants.FIELDS.models,
  });

  const addNewModel = () => {
    append({
      name: "",
      fields: [],
    } as Model);
  };

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
      <Wrap mt={2}>
        <InputForm name={constants.FIELDS.name} maxW={300} />
        <Button colorScheme="blue" onClick={addNewModel}>
          + nuevo modelo
        </Button>
      </Wrap>

      <Wrap p={2}>
        {fields.map((model, index) => (
          <ModelForm
            key={model.id}
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
