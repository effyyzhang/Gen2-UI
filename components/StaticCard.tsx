import {
  Link,
  Flex,
  Box,
  Button,
  Grid,
  Text,
  Spacer,
  Heading,
  Alert,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import "@fontsource/anonymous-pro/700.css";
import React, { useState, useEffect, useRef } from "react";
const StaticCard = () => {
  const poem: string = "Summer rain, the last of the fireflies, go out.";
  const address: string = "0x4adaf983349c49defe8d7a4686202d24b25d0ce3";
  const color1: string = "#".concat(address.slice(2, 8));
  const color2: string = "#".concat(address.slice(-6));
  const cardSize: number = 360;
  const textPath: string =
    "M16,16 h300 a16,16 0 0 1 16,16 v300 a16,16 0 0 1 -16,16 h-300 a16,16 0 0 1 -16,-16 v-300 a16,16 0 0 1 16,-16 z";
  var lines: string[] = poem.split(", ");
  //typewriter animation
  let animatedText = useRef(null);

  const typeWriter = () => {
    const el = animatedText.current;
    const text = el.innerHTML;

    (function _type(i = 0) {
      if (i === text.length) return;
      el.innerHTML = text.substring(0, i + 1);
      setTimeout(() => _type(i + 1), 100);
    })();
  };
  typeWriter();
  return (
    <Box>
      <Center>
        <Flex flexDirection="column" height="100vh">
          <Spacer />
          <Grid
            bg="tomato"
            w={cardSize}
            h={cardSize}
            borderRadius="xl"
            overflow="hidden"
            bgGradient={`linear(to-tr, ${color1}, ${color2})`}
          >
            <Flex padding={5} flexDirection="column" justifyContent="center">
              <Heading
                ref={animatedText}
                size="lg"
                color="Purple 700"
                fontFamily="Anonymous Pro"
                width="100%"
              >
                {poem}
              </Heading>
              <Text mt={2}>
                — Generated by{" "}
                <Link>
                  <Text as="u">"ikani.ai"</Text>
                </Link>
              </Text>
            </Flex>

            <Box position="absolute" p={2} opacity="0.6">
              <svg
                width={cardSize}
                height={cardSize}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path id="svgPath" d={textPath} />
                </defs>
                <g fill="white">
                  <text fontSize="16" fontFamily="Menlo, monospace">
                    <textPath xlinkHref="#svgPath">{address}</textPath>
                  </text>
                </g>
              </svg>
            </Box>
          </Grid>

          <Button
            leftIcon={<FiPlus />}
            my={6}
            mx={12}
            mt={6}
            size="lg"
            borderRadius="full"
            colorScheme="blue"
          >
            Generate new
          </Button>
          <Spacer />
        </Flex>
      </Center>
    </Box>
  );
};

export default StaticCard;
