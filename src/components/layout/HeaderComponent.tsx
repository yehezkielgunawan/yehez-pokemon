import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

import DarkModeSwitch from "./DarkModeSwitch";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      justifyContent="start"
      position="fixed"
      width="100%"
      opacity="0.9"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        bg={colorMode === "light" ? "blue.50" : "blue.700"}
        justifyContent="space-between"
        py={2}
        align="center"
        maxW="48rem"
        mx="auto"
        px={[4, 2]}
        borderBottomRadius={10}
      >
        <Flex gridGap={2} align="center">
          <Image
            alt="pokeball"
            src="https://image.flaticon.com/icons/png/512/1068/1068780.png"
            w={["20px", "30px"]}
            h={["20px", "30px"]}
          />
          <Text as="a" href="/" fontSize={["sm", "lg"]}>
            <b>Yehez-Pokemon</b>
          </Text>
        </Flex>

        <Flex gridGap={3} align="center">
          <Button
            as="a"
            target="_blank"
            href="https://github.com/yehezkielgunawan/yehez-pokemon"
            leftIcon={<FaGithub />}
            variant="ghost"
            size="xs"
            display={["none", "flex"]}
          >
            Open in Github
          </Button>

          <IconButton
            as="a"
            target="_blank"
            href="https://github.com/yehezkielgunawan/yehez-pokemon"
            aria-label="git-repo"
            icon={<FaGithub />}
            bg={colorMode === "light" ? "gray.200" : "gray.700"}
            borderRadius="full"
            display={["flex", "none"]}
          />

          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
