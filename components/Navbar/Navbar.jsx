
import { Box, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
    <Box bg="teal" p={4} boxShadow="md">
      <Flex alignItems="center">
        <Link href="/">
          <a>
            <Box p="2">
              <strong>My Ecommerce</strong>
            </Box>
          </a>
        </Link>

        <Spacer />

        <Box display={{ base: "none", md: "block" }}>
          {/* Add your navigation links here */}
          <Link href="/products">
            <a>
              <Box p="2">Products</Box>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <Box p="2">Cart</Box>
            </a>
          </Link>
          {/* Add more links as needed */}
        </Box>

        <Spacer />

        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />

        <IconButton
          aria-label="Toggle menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
    </Box>
    </ChakraProvider>
  );
};

export default Navbar;
