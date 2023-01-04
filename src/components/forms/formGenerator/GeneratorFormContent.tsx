import React, { useState } from "react";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { Model } from "../../../interfaces/generatorForm/Model";
import { ModelForm } from "../modelForm";
import { Button } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
const GeneratorFormContent = () => {
  const { setValue, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: constants.FIELDS.models,
  });
  const [models, setModels] = useState<Model[]>([]);

  const addNewField = () => {
    setModels([
      {
        name: "",
        fields: [],
      },
      ...models,
    ]);
    append({
      name: "",
      fields: [],
    } as Model);
  };

  console.log(fields);
  const removeField = (fieldIndex: number) => () => {
    const updatedModels = models.filter((model, index) => index !== fieldIndex);
    setModels(updatedModels);
  };
  return (
    <div>
      <Button colorScheme="blue" onClick={addNewField}>
        + nuevo modelo
      </Button>
      <InputForm name={constants.FIELDS.name} />
      {fields.map((model, index) => (
        <ModelForm
          key={index}
          deleteAction={removeField(index)}
          differentiator={index}
        />
      ))}
      <Button colorScheme="blue" type="submit">
        Generar
      </Button>
    </div>
  );
};
export default GeneratorFormContent;
