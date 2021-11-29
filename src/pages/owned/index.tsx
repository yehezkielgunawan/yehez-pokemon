import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React from "react";

import Main from "@/components/wrapper/Main";

const OwnedPokemonsPage = () => {
  const router = useRouter();
  return (
    <Main>
      <Button
        leftIcon={<ChevronLeftIcon />}
        colorScheme="gray"
        onClick={() => router.back()}
      >
        Go Back
      </Button>
      <Text>Owned Pokemon</Text>
    </Main>
  );
};

export default OwnedPokemonsPage;
