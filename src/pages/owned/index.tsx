import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React from "react";

import { usePokemonContext } from "@/components/provider";
import OwnedPokemonBox from "@/components/ui/OwnedPokemonBox";
import Main from "@/components/wrapper/Main";

const OwnedPokemonsPage = () => {
  const router = useRouter();
  const { collectedList } = usePokemonContext();
  return (
    <Main>
      <Button
        leftIcon={<ChevronLeftIcon />}
        colorScheme="gray"
        onClick={() => router.back()}
      >
        Go Back
      </Button>
      {collectedList.length > 0 ? (
        <SimpleGrid columns={[2, 4]} spacing={4}>
          {collectedList.map((pokemon, index) => (
            <OwnedPokemonBox
              key={index}
              name={pokemon.name}
              imgUrl={pokemon.pokeImg}
            />
          ))}
        </SimpleGrid>
      ) : (
        <>
          <Heading as="h2" size="lg" textAlign="center">
            Oops, it is still empty.
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Go back and catch some pokemons!
          </Text>
        </>
      )}
    </Main>
  );
};

export default OwnedPokemonsPage;
