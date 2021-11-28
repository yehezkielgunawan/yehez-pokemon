import { Heading } from "@chakra-ui/react";
import React from "react";

import OwnedPokemonBox from "@/components/ui/OwnedPokemonBox";
import Main from "@/components/wrapper/Main";

const Index = () => {
  return (
    <Main>
      <OwnedPokemonBox />
      <Heading as="h2">Pokedex</Heading>
    </Main>
  );
};

export default Index;
