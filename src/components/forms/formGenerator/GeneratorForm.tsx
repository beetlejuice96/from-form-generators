import { FC } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { GeneratorFormSchema } from "../../../utils/schemas";
import { GeneratorFormConfig } from "./GeneratorFormConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "../../Card";
import { ModelForm } from "../modelForm";

const GeneratorForm: FC = () => {
  const handleSave = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Form Generator
      </Heading>
      <Flex>
        <Form
          onSubmit={handleSave}
          defaultValues={GeneratorFormConfig}
          resolver={yupResolver(GeneratorFormSchema)}
          mode="onChange"
        >
          <InputForm name={constants.FIELDS.name} />
          <ModelForm />
          <Button colorScheme="blue" type="submit">
            Generar
          </Button>
        </Form>
      </Flex>
    </>
  );
};

export default GeneratorForm;
