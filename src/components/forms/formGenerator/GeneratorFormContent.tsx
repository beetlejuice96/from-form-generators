import InputForm from "../../inputForm";
import constants from "../../../constants";
import { Model } from "../../../interfaces/generatorForm/Model";
import { Box, Button, Divider, Spacer, Wrap } from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { ModelCard } from "../../modelCard";
import { Resource } from "../../../interfaces/generatorForm/Resource";
const GeneratorFormContent = () => {
  const { fields, append, remove } = useFieldArray({
    name: constants.FIELDS.models,
  });
  const {
    fields: fieldsResource,
    append: appendResource,
    remove: removeResource,
  } = useFieldArray({
    name: constants.FIELDS.resources,
  });

  const addNewModel = () => {
    append({
      name: "",
      fields: [],
    } as Model);
  };

  const addNewResource = () => {
    appendResource({
      type: "",
      operations: [],
    } as Resource);
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

        <Button
          colorScheme="orange"
          onClick={addNewResource}
          disabled={
            fields.length === 0 || fieldsResource.length === fields.length
          }
        >
          + nuevo recurso
        </Button>
      </Wrap>

      <Wrap p={2}>
        {fields.map((model, index) => (
          <ModelCard
            key={model.id}
            deleteAction={removeModel(index)}
            differentiator={index}
          />
        ))}
      </Wrap>

      <Wrap p={2}>
        {fieldsResource.map((resource, index) => (
          <div>{resource.id}</div>
        ))}
      </Wrap>
    </>
  );
};
export default GeneratorFormContent;
