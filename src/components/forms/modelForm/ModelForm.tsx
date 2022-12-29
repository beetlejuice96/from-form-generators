import React, { FC } from "react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import Fields from "./Fields";
import { useFieldArray, useFormContext } from "react-hook-form";

const ModelForm: FC = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });
  console.log(fields);
  const addNewField = () => {
    append({
      name: "",
      type: "",
    });
  };

  const removeField = (fieldIndex: number) => () => {
    remove(fieldIndex);
  };
  return (
    <>
      <InputForm name={constants.FIELDS.name_model} />
      <button type="button" onClick={addNewField}>
        + Add friend
      </button>
      {fields.map((field, index) => {
        <div id={field.id}>
          <button type="button" onClick={removeField(index)}>
            -
          </button>
          <InputForm name={`model.${index}.name`} />
          <InputForm name={`model.${index}.type`} />
        </div>;
      })}
    </>
  );
};

export default ModelForm;
