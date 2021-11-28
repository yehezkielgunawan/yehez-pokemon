import { Heading, SimpleGrid, Image, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import MotionBox from "@/components/motion/MotionBox";
import OwnedPokemonBox from "@/components/ui/OwnedPokemonBox";
import PokemonBox from "@/components/ui/PokemonBox";
import Main from "@/components/wrapper/Main";
import { getPokemonList } from "@/functions/services/fetcher";
import { PokemonList } from "@/functions/services/types";

const Index = () => {
  const [pokemonList, setPokemonList] = useState<PokemonList>();

  const getPokemons = async (limit?: number, offset?: number) => {
    return await getPokemonList(limit, offset).then((res: PokemonList) =>
      setPokemonList(res)
    );
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Main>
      <OwnedPokemonBox />
      <Heading as="h2">Pokedex</Heading>
      {pokemonList ? (
        <SimpleGrid columns={[1, 2]} spacing={3}>
          {pokemonList.results.map((pokemon, index) => {
            return (
              <PokemonBox key={index} name={pokemon.name} url={pokemon.url} />
            );
          })}
        </SimpleGrid>
      ) : (
        <Center>
          <MotionBox
            animate={{ y: 40 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
            }}
          >
            <Image
              alt="Pokeball"
              src="https://image.flaticon.com/icons/png/512/1068/1068780.png"
              objectFit="contain"
              w={36}
            />
          </MotionBox>
        </Center>
      )}
    </Main>
  );
};

export default Index;
