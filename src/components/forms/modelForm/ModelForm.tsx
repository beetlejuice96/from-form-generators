import React, { FC, useEffect, useState } from "react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { useFieldArray, useWatch } from "react-hook-form";
import { Field } from "../../../interfaces/generatorForm/Field";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spacer,
  Wrap,
  IconButton,
  Divider,
  Box,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { Model } from "../../../interfaces/generatorForm/Model";
import SelectForm from "../../selectForm";
import { options } from "../../../constants/optionstypeFields";

interface IModelForm {
  deleteAction: () => void;
  differentiator: any;
  model: Model;
}

const ModelForm: FC<IModelForm> = ({ deleteAction, differentiator, model }) => {
  const { fields, append, remove } = useFieldArray({
    name: `${constants.FIELDS.models}[${differentiator}].fields`,
  });
  const title = useWatch({ name: `models[${differentiator}].name` });
  const createField = () => {
    append({
      name: "",
      type: "",
    } as Field);
  };

  return (
    <Card minW={"350px"} maxW={"400px"}>
      <CardHeader display={"flex"} alignItems={"center"} pb={0}>
        <Heading w="90px" size="md">
          {title}
        </Heading>
        <Spacer />
        <IconButton
          colorScheme="red"
          onClick={deleteAction}
          aria-label="delete model"
          icon={<DeleteIcon />}
        />
      </CardHeader>
      <CardBody>
        <InputForm name={`models[${differentiator}].name`} />
        <Divider my={2} />
        <Button onClick={createField}>+ nuevo campo</Button>
        {fields.map((field, index) => {
          return (
            <Box
              id={field.id}
              key={field.id}
              display={"flex"}
              alignItems={"center"}
              mt={3}
            >
              <IconButton
                onClick={() => remove(index)}
                aria-label="delete model"
                icon={<CloseIcon />}
                mr={2}
              />

              <Stack spacing={1}>
                <InputForm
                  name={`models[${differentiator}].fields[${index}].name`}
                />
                <SelectForm
                  name={`models[${differentiator}].fields[${index}].type`}
                  options={options}
                />
              </Stack>
            </Box>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default ModelForm;
