import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  useColorMode,
  Badge,
  useBreakpointValue,
  Select,
  Button,
  useDisclosure,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSunny } from "react-icons/io";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { logout } from "../../../store/actions/userAction";
import { useDispatch } from "react-redux";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  //const auth = getAuth();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const isSmallerScreen = useBreakpointValue({ base: true, sm: false });
  //const { isOpen, onToggle } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("User signed out!");
    dispatch(logout());
    router.push("/signup");
  };

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Box bg="white.500" p={4} shadow="md">
      <Flex
        justify="space-between"
        flexDirection={isSmallerScreen ? "column" : "row"}
      >
        {/* Section 1: Brand Name */}
        <Text fontSize="xl" fontWeight="bold" color="gray">
          Vola.pk
        </Text>
        {/* Section 2: Links */}
        {(!isSmallerScreen || isOpen) && (
          <Flex
            justify={isSmallerScreen ? "center" : "space-between"}
            flexDirection={isSmallerScreen ? "column" : "row"}
            alignItems="center"
            mt={isSmallerScreen ? 4 : 0}
          >
            <Link href="/main" passHref>
              <Text mx={2} color="grey" onClick={closeMenu}>
                Home
              </Text>
            </Link>
            <Link href="/products" passHref>
              <Text mx={2} color="grey" onClick={closeMenu}>
                Products
              </Text>
            </Link>
            <Link href="/about" passHref>
              <Text mx={2} color="grey" onClick={closeMenu}>
                About
              </Text>
            </Link>
            <Link href="/contact" passHref>
              <Text mx={2} color="grey" onClick={closeMenu}>
                Contact
              </Text>
            </Link>
            <Link href="/practiceCode" passHref>
              <Text mx={2} color="grey" onClick={closeMenu}>
                Practice Code
              </Text>
            </Link>
          </Flex>
        )}

        {/* Section 3: Icons */}
        {(!isSmallerScreen || isOpen) && (
          <Flex
            alignItems="center"
            flexDirection={isSmallerScreen ? "column" : "row"}
          >
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
              onClick={() => {
                toggleColorMode();
                closeMenu();
              }}
              color="grey"
              mb={2}
            />
            <Link href="/addToCart" passHref>
              <Box position="relative" display="inline-block">
                <IconButton
                  icon={<LuShoppingCart />}
                  color="grey"
                  ml={2}
                  onClick={closeMenu}
                  mb={2}
                />
                {cartItems && cartItems.length > 0 && (
                  <Box
                    position="absolute"
                    top="-2px"
                    left="3px"
                    bg="red"
                    color="white"
                    borderRadius="50%"
                    width="15px"
                    height="15px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="10px"
                  >
                    {cartItems.length}
                  </Box>
                )}
              </Box>
            </Link>
            {console.log(user)}
            {user && user.user != null ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaRegUserCircle />}
                  color="grey"
                  ml={2}
                  onClick={closeMenu}
                  mb={2}
                />
                <MenuList>
                  <MenuItem>Login</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <IconButton
                ml={2}
                mb={2}
                onClick={() => {
                  router.push("/signup");
                }}
                icon={<BiLogIn />}
              />
            )}
          </Flex>
        )}
        {/* Hamburger menu for smaller screens */}
        {isSmallerScreen && (
          <IconButton
            icon={isOpen ? <IoIosClose /> : <GiHamburgerMenu />}
            onClick={toggle}
            color="grey"
            position="fixed"
            right={4}
            top={4}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Box, Flex, Text, IconButton, useColorMode } from "@chakra-ui/react";
// import Link from "next/link";
// import { FaMoon } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdSunny } from "react-icons/io";

// const Navbar = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Box
//       bg={colorMode === "light" ? "white" : "black"}
//       color={colorMode === "light" ? "black" : "white"}
//       p={4}
//       boxShadow="md"
//     >
//       <Flex justifyContent={"space-between"}>
//         <Link href="/">
//           <Box p="2">
//             <Text>My Ecommerce</Text>
//           </Box>
//         </Link>

//         <Flex display={{ base: "none", md: "flex" }}>
//           <Link href="/products">
//             <Box p="2">Products</Box>
//           </Link>
//           <Link href="/cart">
//             <Box p="2">Cart</Box>
//           </Link>
//         </Flex>

//         <Flex gap={4}>
//             <IconButton
//               aria-label="Toggle dark mode"
//               icon={colorMode === "light" ? <FaMoon /> : <IoMdSunny />}
//               onClick={toggleColorMode}
//             />

//             <IconButton
//               aria-label="Toggle menu"
//               icon={<GiHamburgerMenu />}
//               onClick={handleMenuToggle}
//               display={{md:"none" ,base:"flex"}}
//             />
//          </Flex>
//       </Flex>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <Flex display={{md:"none",base:"flex"}} width={""} direction="column" mt={4}>
//           <Link href="/products">
//             <Box p="2">Products</Box>
//           </Link>
//           <Link href="/cart">
//             <Box p="2">Cart</Box>
//           </Link>
//           {/* Add more links as needed */}
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default Navbar;
