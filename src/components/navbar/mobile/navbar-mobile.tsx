import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ScrollContext } from "../../../providers/scroll.providers";
import { useNavigate } from "react-router-dom";

const NavbarMobile = () => {
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
        gap={3}
      >
        <Menu>
          <MenuButton as={Button}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                contextScroll?.onClickAbout();
              }}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => {
                contextScroll?.onClickPricing();
              }}
            >
              Pricing
            </MenuItem>
            <MenuItem
              onClick={() => {
                contextScroll?.onClickContact();
              }}
            >
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Button
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
  );
};

export default NavbarMobile;
