// components/Header.js
import { Box, Grid, Image, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex >
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Adjusted template columns
      gap={4}
      alignItems="center"
      p={8}
      bg="white.500"
    >
      {/* Left Section */}
      <Box align="center" justifyContent="center" gap={15}>
        <Text fontSize= {40} color="grey"> {/* Adjusted font size */}
        Take it easy
        </Text>
        <Text>
          Creating a better life for you, Creating a better life for you
          </Text>
        <Button >Shop</Button>
      </Box>

      {/* Right Section */}
      <Box align="center">
        <Image
          src="/img4.png" // Replace with the path to your image
          alt="Your Image Alt Text"
          alignItems = "center"
          boxSize={{ base: '450px', md: '650px' }} // Adjusted box size
          objectFit="contain"
          
        />
      </Box>
    </Grid>
    </Flex>
  );
};

export default Header;





// // components/Header.js
// import { Box, Flex, Image, Text,Button ,Grid,Center} from '@chakra-ui/react';

// const Header = () => {
//   return (
//     <Grid  templateColumns="repeat(2, 1fr)"  p={50} >
//       {/* Left Section */}
//       <Center mt={30} align="center" justifyContent="center" >
//         <Text fontSize="xl" fontWeight="bold">
//           Shop here 
//         </Text>
//       </Center>

//       {/* Right Section */}
//       <Box >
//         <Image
//           src="/img.png" // Replace with the actual path to yo
// alt="Your Image Alt Text" 
//           height="50vh"// Set the desired size for the image
//           objectFit="contain" // Optional: Apply a circular border to the image
//         />
//       </Box>
//     </Grid>
//   );
// };

// export default Header;