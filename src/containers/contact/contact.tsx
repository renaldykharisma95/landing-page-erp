import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollContext } from "../../providers/scroll.providers";

const Contact = () => {
  const contextScroll = useContext(ScrollContext);

  return (
    <Box ref={contextScroll?.contactRef}>
      <Box bg="gray.50" py={16} px={8}>
        <Box maxW="600px" mx="auto">
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            Contact Us
          </Heading>
          <Text textAlign="center" mb={8} color="gray.600">
            Have questions or feedback? We'd love to hear from you.
          </Text>

          <form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input name="name" placeholder="Enter your name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Your Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Type your message..."
                  rows={6}
                />
              </FormControl>

              <Button colorScheme="blue" type="submit" w="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
