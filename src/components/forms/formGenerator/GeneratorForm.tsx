import { FC, useState } from "react";
import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Form } from "../../../generics/Form";
import InputForm from "../../inputForm";
import constants from "../../../constants";
import { GeneratorFormSchema } from "../../../utils/schemas";
import { GeneratorFormConfig } from "./GeneratorFormConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModelForm } from "../modelForm";
import { Model } from "../../../interfaces/generatorForm/Model";
import GeneratorFormContent from "./GeneratorFormContent";

const GeneratorForm: FC = () => {
  const handleSave = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Form Generator
      </Heading>

      <Container maxW="container.xl">
        <Form
          onSubmit={handleSave}
          defaultValues={GeneratorFormConfig}
          resolver={yupResolver(GeneratorFormSchema)}
          mode="onChange"
        >
          <GeneratorFormContent />
        </Form>
      </Container>
    </>
  );
};

export default GeneratorForm;
