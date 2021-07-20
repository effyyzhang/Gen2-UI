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

//prepare text on path animation

const LandingPage = () => {
  const poem: string = "Summer rain, the last of the fireflies, Who is Ikani?";
  const address: string = "0x4adaf983349c49defe8d7a4686202d24b25d0ce3";
  const color1: string = "#".concat(address.slice(2, 8));
  const color2: string = "#".concat(address.slice(-6));
  var lines: String[] = poem.split(", ");

  return (
    <Box bg="white">
      <Box
        bg="radial-gradient(circle at right top, rgb(98, 118, 255) -5%, rgba(255, 255, 1, 0) 10%), radial-gradient(circle at -20% 22.5%, rgb(196, 255, 238) -5%, rgba(255, 255, 1, 0) 30%), radial-gradient(circle at 100% 40%, rgb(98, 118, 255) -20%, rgba(255, 255, 1, 0) 20%), radial-gradient(circle at 0% 70%, rgb(196, 255, 238) 0%, rgba(255, 255, 1, 0) 40%), radial-gradient(circle at 100% 100%, rgb(96, 227, 36) 0%, rgba(255, 255, 1, 0) 15%);"
        bgImage="radial-gradient(circle at right top, rgb(98, 118, 255) -5%, rgba(255, 255, 1, 0) 10%), radial-gradient(circle at -20% 22.5%, rgb(196, 255, 238) -5%, rgba(255, 255, 1, 0) 30%), radial-gradient(circle at 100% 40%, rgb(98, 118, 255) -20%, rgba(255, 255, 1, 0) 20%), radial-gradient(circle at 0% 70%, rgb(196, 255, 238) 0%, rgba(255, 255, 1, 0) 40%), radial-gradient(circle at 100% 100%, rgb(96, 227, 36) 0%, rgba(255, 255, 1, 0) 15%)"
      >
        <Center>
          <Flex flexDirection="column" height="100vh">
            <Spacer />
            <Heading size="4xl" color="black">
              {lines[0]},
              <br />
              {lines[1]}.
              <br />
              {lines[2]}
            </Heading>
            <Spacer />
            <Button
              leftIcon={<FiPlus />}
              my={6}
              mx={12}
              size="lg"
              margin={0}
              marginTop="40px"
              borderRadius="full"
              bg="#000"
              color="#fff"
              width="240px"
            >
              Join the Beta
            </Button>
            <Spacer />
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default LandingPage;
