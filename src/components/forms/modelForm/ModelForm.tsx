import React, { FC, useState } from "react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import Fields from "./Fields";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Field } from "../../../interfaces/generatorForm/Field";
import { Button } from "@chakra-ui/react";

interface IModelForm {
  deleteAction: () => void;
}
const ModelForm: FC<IModelForm> = ({ deleteAction }) => {
  const addNewField = () => {};

  // const removeField = (fieldIndex: number) => () => {
  //   deleteAction();
  // };
  return (
    <>
      <Button colorScheme="blue" onClick={deleteAction}>
        + eliminar modelo
      </Button>
      <InputForm name={"nameModel"} />
      {/* {fields.map((field, index) => {
        return (
          <div id={field.id} key={field.id}>
            <button type="button" onClick={removeField(index)}>
              -
            </button>
            <InputForm name={`model.${index}.name`} />
            <InputForm name={`model.${index}.type`} />
          </div>
        );
      })} */}
    </>
  );
};

export default ModelForm;
