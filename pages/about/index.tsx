import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/react";
const AboutPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading>About Gen 2</Heading>

      <NextLink href="/" passHref>
        <Link>Home</Link>
      </NextLink>
    </Flex>
  );
};
export default AboutPage;
