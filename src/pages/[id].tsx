import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

import { usePokemonContext } from "@/components/provider";
import { useAppToast } from "@/components/ui/AppToast";
import PokemonLoader from "@/components/ui/PokemonLoader";
import Main from "@/components/wrapper/Main";
import { getPokemonDetail } from "@/functions/services/fetcher";
import { DetailPokemonResType } from "@/functions/services/types";

const PokemonDetailsPage = () => {
  const { collectedList, capturePokemon, releasePokemon } = usePokemonContext();
  const router = useRouter();
  const toast = useAppToast();
  const { id } = router.query;
  const [pokemonDetail, setPokemonDetail] = useState<DetailPokemonResType>();

  const fetchPokemonDetails = async (pokemonID: string) => {
    return await getPokemonDetail(pokemonID).then(
      (res: DetailPokemonResType) => {
        return setPokemonDetail(res);
      }
    );
  };

  const catchPokemon = () => {
    capturePokemon({
      name: String(pokemonDetail?.name),
      pokeImg: String(pokemonDetail?.sprites.front_default),
    });
    toast({
      status: "success",
      title: `${pokemonDetail?.name} has been captured to your pokedex!`,
    });
    router.push("/owned");
  };

  const release = () => {
    releasePokemon(String(pokemonDetail?.name));
    toast({
      status: "info",
      title: `${pokemonDetail?.name} has been released!`,
    });
  };

  const checkPokemon = () => {
    return collectedList.some(
      (pokemon) => pokemon.name === pokemonDetail?.name
    );
  };

  useEffect(() => {
    id && fetchPokemonDetails(String(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    checkPokemon();
  });

  return (
    <Main>
      <Button
        leftIcon={<ChevronLeftIcon />}
        colorScheme="gray"
        onClick={() => router.back()}
      >
        Go Back
      </Button>

      {pokemonDetail ? (
        <>
          <Flex
            align="center"
            justify="space-between"
            wrap={["wrap", "nowrap"]}
          >
            <Image
              alt="pokemon-image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetail.id}.png`}
              w="100%"
            />
            <Stack alignItems="stretch" spacing={10} w="100%">
              {!checkPokemon() ? (
                <Button
                  colorScheme="orange"
                  borderRadius={10}
                  onClick={() => catchPokemon()}
                >
                  Catch
                </Button>
              ) : (
                <Button
                  colorScheme="teal"
                  borderRadius={10}
                  onClick={() => release()}
                >
                  Release
                </Button>
              )}
              <Stack spacing={2}>
                <Text fontSize="xl">
                  <b>abilities</b>
                </Text>
                <Flex gridGap={1}>
                  {pokemonDetail.abilities?.map((ability, index) => (
                    <Text key={index}>{ability.ability.name}</Text>
                  ))}
                </Flex>
              </Stack>
            </Stack>
          </Flex>
          <Flex gridGap={2}>
            <Heading
              as="h1"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              {pokemonDetail.name}
            </Heading>
            <Text fontSize="lg" color="gray">
              <b>#{pokemonDetail.id}</b>
            </Text>
          </Flex>
          <Flex gridGap={2} align="center">
            <Text fontSize={["lg", "xl"]}>
              <b>types</b>
            </Text>
            {pokemonDetail.types?.map((type, index) => (
              <Text
                key={index}
                bg="purple.200"
                borderRadius={2}
                p={1}
                color="purple.700"
              >
                <b>{type.type.name}</b>
              </Text>
            ))}
          </Flex>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box textAlign="left" flex="1">
                  <b>moves</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel p={2}>
                <SimpleGrid columns={2} spacing={4}>
                  {pokemonDetail.moves.map((move, index) => (
                    <Text key={index}>{move.move.name}</Text>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <PokemonLoader />
      )}
    </Main>
  );
};

export default PokemonDetailsPage;
