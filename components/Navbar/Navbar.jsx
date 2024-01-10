
import { Box, Flex, Spacer,Text, IconButton, useColorMode} from "@chakra-ui/react";
import Link from "next/link";
import { FaMoon} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "white" : "black"} 
        color={colorMode === "light" ? "black" : "white"}  
        p={4} boxShadow="md">
      <Flex justifyContent={"space-between"} >
        <Link href="/">
            <Box p="2">
              <Text>My Ecommerce</Text>
            </Box>
        </Link>

        <Spacer />

        <Flex>
          
          <Link href="/products">
              <Box p="2">Products</Box>
          </Link>
          <Link href="/cart">
              <Box p="2">Cart</Box>
          </Link>
          {/* Add more links as needed */}
        </Flex>

        <Spacer />

        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
          onClick={toggleColorMode}
        />

        <IconButton
          aria-label="Toggle menu"
          icon={<GiHamburgerMenu/>}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
