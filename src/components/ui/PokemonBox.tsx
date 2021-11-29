import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";

import { getPokemonID } from "@/functions/helpers/getPokemonId";

type PokemonBoxProps = {
  name: string;
  url: string;
};

// Each fetched pokemon list will be stored here
const PokemonBox = ({ name, url }: PokemonBoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="orange.300"
      borderRadius={10}
      p={[4, 8]}
      boxShadow={colorMode === "light" ? "dark-lg" : "outline"}
    >
      <Stack spacing={3}>
        <Text
          fontSize={["md", "xl"]}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          <b>{name}</b>
        </Text>
        <Text fontSize="lg" color="gray">
          <b>#{getPokemonID(url)}</b>
        </Text>
      </Stack>
      <Image
        alt="pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonID(
          url
        )}.png`}
      />
    </Box>
  );
};

export default PokemonBox;
