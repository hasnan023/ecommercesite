// components/Header.js
import { Box, Flex, Image, Text,Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex align="center" justifyContent="center" gap={50}  p={50} >
      {/* Left Section */}
      <Box mt={30} >
        <Text fontSize="xl" fontWeight="bold">
          Shop here 
        </Text>
        <Button mt={30}>
          Get started
        </Button>
      </Box>

      {/* Right Section */}
      <Box >
        <Image
          src="/img.png" // Replace with the actual path to your image
          alt="Your Image Alt Text" 
          height="50vh"// Set the desired size for the image
          objectFit="contain" // Optional: Apply a circular border to the image
        />
      </Box>
    </Flex>
  );
};

export default Header;
