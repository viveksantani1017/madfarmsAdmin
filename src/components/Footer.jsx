import {
  Box,
  chakra,
  Container,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <Box
      mt="20"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      shadow={"md"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Madfarm
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Text>Home</Text>
          </Link>
          <Link href={"#"}>Examples</Link>
          <Menu>
            <MenuButton>Manage Records</MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Link href="/managerecords" style={{ textDecoration: "none" }}>
                  <span>Manage User</span>
                </Link>
              </MenuItem>
              <MenuItem minH="48px">
                <Link  href="/managecattles" style={{ textDecoration: "none" }}>
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
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © 2022 Marvel Agros And Dairy Farm(Madfarm). All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <IconButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </IconButton>
            <IconButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </IconButton>
            <IconButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
