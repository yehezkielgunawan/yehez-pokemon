import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

import { usePokemonContext } from "../provider";

import { useAppToast } from "./AppToast";
import { LinkComponent } from "./LinkComponent";

type OwnedPokemonBoxProps = {
  name: string;
  imgUrl: string;
};

const OwnedPokemonBox = ({ name, imgUrl }: OwnedPokemonBoxProps) => {
  const { colorMode } = useColorMode();
  const { releasePokemon } = usePokemonContext();
  const toast = useAppToast();

  const releaseThePokemon = () => {
    releasePokemon(name);
    toast({
      status: "info",
      title: `${name} has been released!`,
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      bg={colorMode === "light" ? "white" : "gray.600"}
      borderRadius={10}
      p={[2, 6]}
      boxShadow={colorMode === "light" ? "dark-lg" : "outline"}
    >
      <LinkComponent href={`/${name}`}>
        <Image alt="pokemon-image" src={imgUrl} />
        <Text fontSize="lg">{name}</Text>
      </LinkComponent>
      <Button
        colorScheme="purple"
        borderRadius={10}
        onClick={() => releaseThePokemon()}
      >
        Release
      </Button>
    </Box>
  );
};

export default OwnedPokemonBox;
