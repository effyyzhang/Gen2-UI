import {
  Link,
  Flex,
  Box,
  Button,
  Grid,
  Text,
  SimpleGrid,
  Heading,
  Alert,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { PoemData } from "../lib/types";

const Card = ({ data }: { data: PoemData }) => {
  var lines: String[] = data.poem.split(", ");
  console.log(lines);
  return (
    <Box>
      <Center>
        <Flex flexDirection="column">
          <Grid
            bg="tomato"
            padding="1rem"
            w="360px"
            h="640px"
            borderRadius="xl"
            overflow="hidden"
          >
            <Heading size="lg">
              {lines[0]},
              <br />
              {lines[1]},
              <br />
              {lines[2]}
            </Heading>
            <Text>{data.id}</Text>
          </Grid>
          <Button leftIcon={<FiPlus />} m="24px" size="lg" borderRadius="xl">
            Generate new
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Card;
