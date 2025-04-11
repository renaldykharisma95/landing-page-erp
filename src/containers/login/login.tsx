import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { blobBottomView, blobTopView } from "../home/home.styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box {...blobTopView} />
      <Box {...blobBottomView} />
      <Flex minH="100vh" align="center" justify="center">
        <Box p={8} rounded="xl" shadow="lg" w={{ base: "90%", md: "400px" }}>
          <Stack spacing={6}>
            <Heading fontSize="2xl" textAlign="center">
              Login to Your Account
            </Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="you@example.com" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="********" />
            </FormControl>
            <Button colorScheme="blue" size="lg" w="full">
              Login
            </Button>
            <Text textAlign="center" fontSize="sm" color="gray.500">
              Don’t have an account?{" "}
              <Text as="span" color="blue.500" cursor="pointer">
                Sign up
              </Text>
            </Text>
            <Button variant="link" onClick={() => navigate("/")}>
              Back to homepage
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Login;
