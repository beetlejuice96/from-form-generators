import { Box, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ReactElement } from "../../interfaces/react";
import { Heading } from "@chakra-ui/react";

interface ICard {
  children: ReactElement[];
}
const Card: FC<ICard> = ({ children }) => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
    >
      <Stack>
        <Heading as="h2" size="lg">
          Model
        </Heading>
        {children}
      </Stack>
    </Box>
  );
};

export default Card;
