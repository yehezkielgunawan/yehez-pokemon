import { Center, Image } from "@chakra-ui/react";
import React from "react";

import MotionBox from "../motion/MotionBox";

// Just a loader
const PokemonLoader = () => {
  return (
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
  );
};

export default PokemonLoader;
