import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

import MotionBox from "@/components/motion/MotionBox";
import OwnedPokemonBox from "@/components/ui/OwnedPokemonBox";
import PokemonBox from "@/components/ui/PokemonBox";
import Main from "@/components/wrapper/Main";
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
