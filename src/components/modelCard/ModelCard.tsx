import React, { FC, useEffect, useState } from "react";
import { Form } from "../../generics/Form";
import InputForm from "../inputForm";
import constants from "../../constants";
import { useFieldArray } from "react-hook-form";
import { Field } from "../../interfaces/generatorForm/Field";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Divider,
  Box,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import SelectForm from "../selectForm";
import { options } from "../../constants/optionstypeFields";

interface IModelCard {
  deleteAction: () => void;
  differentiator: any;
}

const ModelCard: FC<IModelCard> = ({ deleteAction, differentiator }) => {
  const { fields, append, remove } = useFieldArray({
    name: `${constants.FIELDS.models}[${differentiator}].fields`,
  });

  const createField = () => {
    append({
      name: "",
      type: "",
    } as Field);
  };

  return (
    <Card minW={"350px"} maxW={"400px"}>
      <CardHeader display={"flex"} pb={0}>
        <InputForm name={`models[${differentiator}].name`} />
        <IconButton
          colorScheme="red"
          onClick={deleteAction}
          aria-label="delete model"
          icon={<DeleteIcon />}
          ml={1}
        />
      </CardHeader>
      <CardBody>
        <Divider my={2} />
        <Button onClick={createField}>+ nuevo campo</Button>
        {fields.map((field, index) => {
          return (
            <Box id={field.id} key={field.id} display={"flex"} mt={3}>
              <IconButton
                onClick={() => remove(index)}
                aria-label="delete model"
                icon={<CloseIcon />}
                mr={2}
              />

              <InputForm
                mr={2}
                name={`models[${differentiator}].fields[${index}].name`}
              />
              <SelectForm
                name={`models[${differentiator}].fields[${index}].type`}
                options={options}
                propsStyle={{
                  maxW: 120,
                }}
              />
            </Box>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default ModelCard;
