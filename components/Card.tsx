import {
  Link,
  Flex,
  Box,
  Button,
  Grid,
  Text,
  Spacer,
  SimpleGrid,
  Heading,
  Alert,
  Center,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { PoemData } from "../lib/types";
import Address from "./Address";

//prepare text on path animation

const Card = ({ data }: { data: PoemData }) => {
  var lines: String[] = data.poem.split(", ");
  return (
    <Box>
      <Center>
        <Flex flexDirection="column" height="100vh">
          <Spacer />
          <Grid
            bg="tomato"
            w="360px"
            h="640px"
            borderRadius="xl"
            overflow="hidden"
            bgGradient={[
              "linear(to-tr, teal.300,yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
          >
            <Address address={data.address} />
            <Heading size="lg" padding={8} color="Purple 700">
              {lines[0]},
              <br />
              {lines[1]},
              <br />
              {lines[2]}
            </Heading>
          </Grid>
          <Button
            leftIcon={<FiPlus />}
            my={6}
            mx={12}
            size="lg"
            borderRadius="full"
            colorScheme="pink"
          >
            Generate new
          </Button>
          <Spacer />
        </Flex>
      </Center>
    </Box>
  );
};

export default Card;
