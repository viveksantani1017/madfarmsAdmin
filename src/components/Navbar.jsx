import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Link,
  textDecoration,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      shadow={"md"}
      padding={6}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Madfarms
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex", lg: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text>Home</Text>
        </Link>
        <Text>Examples</Text>
        <Menu>
          <MenuButton>
            Manage Records
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Link href="/managerecords" style={{ textDecoration: "none" }}>
                <span>Manage User</span>
              </Link>
            </MenuItem>
            <MenuItem minH="48px">
              <Link style={{ textDecoration: "none" }}>
                <span>Manage Cattle</span>
              </Link>
            </MenuItem>
            <MenuItem minH="48px">
              <Link style={{ textDecoration: "none" }}>
                <span>Manage Subscription</span>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button onClick={()=>{navigate('/login')}}>Login</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
