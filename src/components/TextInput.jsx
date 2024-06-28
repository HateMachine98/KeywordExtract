import { Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TextInput = ({ extractKeyword }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter some text",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      extractKeyword(text);
    }
  };
  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keyword
      </Button>
    </>
  );
};

export default TextInput;
