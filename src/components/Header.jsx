import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="#fff" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Extract keywords from text
      </Text>
    </>
  );
};

export default Header;
