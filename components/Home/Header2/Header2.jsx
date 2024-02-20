import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const Header = () => {
  const [text, setText] = useState("");
  
  const textContent = "Explore our store for the furniture";
  const animateTypingCalled = useRef(false);

  useEffect(() => {
    let interval;

    function animateTyping() {
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex < textContent.length-1) {
          setText((prevText) => prevText + textContent[currentIndex]);
          currentIndex++;
          console.log(currentIndex)
          
        } else {
          clearInterval(interval);
        }
      }, 90); // Adjust typing speed as needed
    }

    if (!animateTypingCalled.current) {
      animateTyping();
      animateTypingCalled.current = true;
    }

    return () => {
      clearInterval(interval);
    };
  }, []);  // Empty dependency array means this effect runs only once

  return (
    <Flex
      align="center"
      p={6}
      boxShadow="2xl"
      flexDirection={{base:"column" , lg: "row"}}
    >
      {/* Left Section */}
      {/* <Box alignItems="center">
        <Flex flexDirection="column">
          <Box fontWeight="bold" >
            The Comfort you need
          </Box>
        </Flex>
      </Box> */}

      {/* Center Section */}
      <Box>
        <Image src="/img4.png" alt="Your Image" />
      </Box>

      {/* Right Section */}
      <Box
        gap={3}
        display="flex"
        flexDirection="column"
        alignItem="center"
        width="30%"
        mx="auto"
      >
        <Text fontSize={30} fontWeight="bold">
          {text}
        </Text>
        <Button
          alignSelf="flex-end"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="grey"
          variant="outline"
        >
          Shoppp
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
