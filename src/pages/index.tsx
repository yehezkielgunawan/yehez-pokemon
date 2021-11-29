import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Heading, SimpleGrid, Flex, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

import { LinkComponent } from "@/components/ui/LinkComponent";
import OwnedPokemonBox from "@/components/ui/OwnedPokemonBox";
import PokemonBox from "@/components/ui/PokemonBox";
import PokemonLoader from "@/components/ui/PokemonLoader";
import Main from "@/components/wrapper/Main";
import { getPokemonID } from "@/functions/helpers/getPokemonId";
import { getPokemonList } from "@/functions/services/fetcher";
import { PokemonList } from "@/functions/services/types";

const Index = () => {
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [offset, setOffset] = useState<number>(0);
  const router = useRouter();

  const fetchPokemons = async (offset?: number) => {
    return await getPokemonList(offset).then((res: PokemonList) => {
      setPokemonList(res);
    });
  };

  const nextPage = () => {
    setOffset((offsetState) => {
      offsetState += 20;
      router.push(`?offset=${offsetState}`);
      return offsetState;
    });
  };

  const prevPage = () => {
    setOffset((offsetState) => {
      if (offsetState < 20) {
        offsetState = 0;
      } else {
        offsetState -= 20;
      }
      router.push(`?offset=${offsetState}`);
      return offsetState;
    });
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      setOffset(Number(router.query.offset));
      fetchPokemons(Number(router.query.offset));
    } else {
      fetchPokemons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.offset, offset]);

  return (
    <Main>
      <OwnedPokemonBox />
      <Flex align="center" justify="space-between">
        <Heading as="h2">Pokedex</Heading>
      </Flex>
      <Flex gridGap={3} align="center" justify="space-between">
        <IconButton
          w="100%"
          aria-label="prevPage"
          icon={<ChevronLeftIcon />}
          onClick={() => prevPage()}
          disabled={!pokemonList?.previous}
        />
        <IconButton
          w="100%"
          aria-label="nextPage"
          icon={<ChevronRightIcon />}
          onClick={() => nextPage()}
          disabled={!pokemonList?.next}
        />
      </Flex>
      {pokemonList ? (
        <SimpleGrid columns={[1, 2]} spacing={3}>
          {pokemonList.results.map((pokemon, index) => {
            return (
              <LinkComponent key={index} href={getPokemonID(pokemon.url)}>
                <PokemonBox name={pokemon.name} url={pokemon.url} />
              </LinkComponent>
            );
          })}
        </SimpleGrid>
      ) : (
        <PokemonLoader />
      )}
      <Flex gridGap={3} align="center" justify="space-between">
        <IconButton
          w="100%"
          aria-label="prevPage"
          icon={<ChevronLeftIcon />}
          onClick={() => prevPage()}
          disabled={!pokemonList?.previous}
        />
        <IconButton
          w="100%"
          aria-label="nextPage"
          icon={<ChevronRightIcon />}
          onClick={() => nextPage()}
          disabled={!pokemonList?.next}
        />
      </Flex>
    </Main>
  );
};

export default Index;
