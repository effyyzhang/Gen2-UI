import { AppProps } from "next/app";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import theme from "../lib/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
