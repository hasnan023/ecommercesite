import React from "react";
import {
  Flex,
  Box,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={3}
      boxShadow="2xl"
    >
      {/* Logo */}
      <Box mx={4}>Furniture.pk</Box>

      {/* Navigation Links */}
      <Box display={{ base: "none", md: "block" }}>
        <UnorderedList
          listStyleType="none"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <ListItem mx={4}>Home</ListItem>
          <ListItem mx={4}>Products</ListItem>
          <ListItem mx={4}>Contact</ListItem>
        </UnorderedList>
      </Box>

      {/* Hamburger Icon */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          variant="ghost"
          colorScheme="blue"
          aria-label="Open Menu"
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <UnorderedList listStyleType="none">
                  <ListItem mx={4}>Home</ListItem>
                  <ListItem mx={4}>Products</ListItem>
                  <ListItem mx={4}>Contact</ListItem>
                  <ListItem mx={4} my={2}>
                    <IconButton
                      icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
                      onClick={toggleColorMode}
                      color="grey"
                      
                    />
                  </ListItem>
                  <ListItem mx={4} my={2}>
                    <IconButton icon={<CiShoppingCart />} color="grey" />
                  </ListItem>
                  <ListItem mx={4} my={2}>
                    <IconButton icon={<FaUser />} color="grey" />
                  </ListItem>
                </UnorderedList>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>

      {/* Icons */}
      <Box
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
        gap={3}
      >
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
          onClick={toggleColorMode}
          color="grey"
          mb={2}
        />
        <IconButton icon={<CiShoppingCart />} color="grey" />
        <IconButton icon={<FaUser />} color="grey" />
      </Box>
    </Flex>
    
  );
};


export default Navbar;
