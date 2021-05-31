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
const Card = ({ props }) => {
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
            <Heading>{props.poem}</Heading>
            <Text>{props.id}</Text>
          </Grid>
          <Button leftIcon={<FiPlus />} size="lg">
            Generate new
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Card;
