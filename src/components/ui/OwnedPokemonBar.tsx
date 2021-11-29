import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { VscTriangleRight } from "react-icons/vsc";

import { usePokemonContext } from "../provider";

import { LinkComponent } from "./LinkComponent";

// Just a box which displayed in the home page
const OwnedPokemonBar = () => {
  const { colorMode } = useColorMode();
  const { collectedList } = usePokemonContext();
  return (
    <LinkComponent href="/owned">
      <Flex
        align="center"
        justify="space-between"
        bg={colorMode === "light" ? "orange.300" : "orange.500"}
        p={4}
        borderRadius={10}
      >
        <Stack spacing={2}>
          <Heading as="h5" size="lg">
            My Pokemon
          </Heading>
          <Text>
            Owned: <b>{collectedList.length}</b>
          </Text>
        </Stack>
        <Icon as={VscTriangleRight} />
      </Flex>
    </LinkComponent>
  );
};

export default OwnedPokemonBar;
