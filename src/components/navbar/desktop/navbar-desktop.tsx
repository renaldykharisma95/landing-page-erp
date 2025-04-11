import { Button, Flex, Image } from "@chakra-ui/react";
import profit from "../../../assets/profit.webp";
import { fontStyle } from "./navbar-desktop.styles";
import { useContext } from "react";
import { ScrollContext } from "../../../providers/scroll.providers";
import { useNavigate } from "react-router-dom";

const NavbarDesktop = () => {
  const contextScroll = useContext(ScrollContext);
  const navigate = useNavigate();
  return (
    <Flex
      height="70px"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top={0}
      w="full"
      px={3}
    >
      <Flex
        zIndex="100 !important"
        justifyContent="flex-start"
        alignItems="center"
        gap={6}
      >
        <Image src={profit} w="60px" h="60px" alt="logo" />
      </Flex>
      <Flex flexDirection="row" gap={8} alignItems="center">
        <Button
          zIndex={100}
          color="black"
          onClick={() => {
            contextScroll?.onClickAbout();
          }}
          variant="link"
          {...fontStyle}
        >
          About
        </Button>
        <Button
          zIndex={100}
          color="black"
          onClick={() => {
            contextScroll?.onClickPricing();
          }}
          variant="link"
          {...fontStyle}
        >
          Pricing
        </Button>
        <Button
          onClick={() => {
            contextScroll?.onClickContact();
          }}
          zIndex={100}
          color="black"
          variant="link"
          {...fontStyle}
        >
          Contact
        </Button>
        <Button
          zIndex={100}
          value="outline"
          color="blue.400"
          borderColor="blue.300"
          borderWidth="1.5px"
          borderRadius="md"
          fontWeight="medium"
          px={6}
          py={2}
          _hover={{ bg: "blue.50" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavbarDesktop;
