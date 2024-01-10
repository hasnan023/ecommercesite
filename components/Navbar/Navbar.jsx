import { useState } from "react";
import { Box, Flex, Text, IconButton, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      bg={colorMode === "light" ? "white" : "black"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      boxShadow="md"
    >
      <Flex justifyContent={"space-between"}>
        <Link href="/">
          <Box p="2">
            <Text>My Ecommerce</Text>
          </Box>
        </Link>

        <Flex display={{ base: "none", md: "flex" }}>
          <Link href="/products">
            <Box p="2">Products</Box>
          </Link>
          <Link href="/cart">
            <Box p="2">Cart</Box>
          </Link>
          {/* Add more links as needed */}
        </Flex>

        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
          onClick={toggleColorMode}
        />

        <IconButton
          aria-label="Toggle menu"
          icon={<GiHamburgerMenu />}
          onClick={handleMenuToggle}
        />
      </Flex>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Flex direction="column" mt={4}>
          <Link href="/products">
            <Box p="2">Products</Box>
          </Link>
          <Link href="/cart">
            <Box p="2">Cart</Box>
          </Link>
          {/* Add more links as needed */}
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
