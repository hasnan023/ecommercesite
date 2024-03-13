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
  //  )
const tagLine = "Discover Endless Treasures, Delivered \n to Your Door"
  return (
    <Flex
      maxHeight="100vh"
      justifyContent="center"
      marginBottom={10}
      shadow="lg"
      padding={6}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        bg="white.500"
        alignItems="center"
      >
        <Box my={4} align="center" justifyContent="center">
          <Text fontSize={30} color="grey" fontWeight="bold">
            Vola.pk
          </Text>
          <Text fontSize={30} my={4} whiteSpace="pre-line">
            {tagLine}
          </Text>
          <Button colorScheme="teal" size="lg" my={4}>
            Shop
          </Button>
        </Box>

        <>
          <Image
            align="center"
            src="/img4.png" // Replace with the path to your image
            alt="Your Image Alt Text"
            alignItems="center"
            // Adjusted box size
            objectFit="contain"
          />
        </>

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
