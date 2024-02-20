// components/Header.js
import { Box, Grid, Image, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-bootstrap";

// import { ImageSlide } from "react-chakra-slide-show";
// import { useMemo } from "react";

const Header = () => {
  //  const images = useMemo(() => ["/img4.png", "image2.jpg", "/im4.png", "image4.jpg"],
  //    []
  //  );

  //  const captions = useMemo(
  //    () => [
  //      "caption for image1.jpg",
  //      "caption for image2.jpg",
  //      "caption for image3.jpg",
  //      "caption for image4.jpg",
  //    ],
  //    []
  //  );

  return (
    <Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Adjusted template columns
        gap={4}
        alignItems="center"
        p={8}
        bg="white.500"
      >
        {/* Left Section */}
        <Box my={4} align="center" justifyContent="center" gap={15}>
          <Text fontSize={40} color="grey">
            {" "}
            {/* Adjusted font size */}
            Take it easy
          </Text>
          <Text my={4}>
            Creating a better life for you, Creating a better life for you
          </Text>
          <Button my={4}>Shop</Button>
        </Box>

        {/* Right Section */}
        <Box align="center">
          <Image
            src="/img4.png" // Replace with the path to your image
            alt="Your Image Alt Text"
            alignItems="center"
            boxSize={{ base: "450px", md: "650px" }} // Adjusted box size
            objectFit="contain"
          />
        </Box>

        {/* <ImageSlide images={images} captions={captions} /> */}
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
