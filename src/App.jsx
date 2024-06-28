import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

const App = () => {
  const extractKeyword = (text) => {
    console.log("text:", text);
  };
  return (
    <Box bg="blue.600" color="#fff" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeyword={extractKeyword} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
