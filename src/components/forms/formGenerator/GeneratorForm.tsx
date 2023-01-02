import { FC, useState } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { GeneratorFormSchema } from "../../../utils/schemas";
import { GeneratorFormConfig } from "./GeneratorFormConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModelForm } from "../modelForm";
import { Model } from "../../../interfaces/generatorForm/Model";

const GeneratorForm: FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const handleSave = (data: any) => {
    console.log(data);
  };
  const addNewField = () => {
    setModels([
      {
        name: "",
        fields: [],
      },
      ...models,
    ]);
  };

  const removeField = (fieldIndex: number) => () => {};
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Form Generator
      </Heading>
      <Button colorScheme="blue" onClick={addNewField}>
        + nuevo modelo
      </Button>
      <Flex>
        <Form
          onSubmit={handleSave}
          defaultValues={GeneratorFormConfig}
          resolver={yupResolver(GeneratorFormSchema)}
          mode="onChange"
        >
          <InputForm name={constants.FIELDS.name} />
          {models.map((model, index) => (
            <ModelForm key={index} deleteAction={removeField(index)} />
          ))}
          <Button colorScheme="blue" type="submit">
            Generar
          </Button>
        </Form>
      </Flex>
    </>
  );
};

export default GeneratorForm;
