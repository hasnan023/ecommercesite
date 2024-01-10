// components/Header.js
import { Box ,Image } from '@chakra-ui/react';
import NextImage from 'next/image';

const Header = () => {
  return (
    <Box minHeight= "40px" >
      {/* Example using CSS for relative units */}
      <img
      

        src="/img.jpg" // Make sure the image is in the public directory
        alt="Your Image Alt Text"
        width="100%" 
       
        
        objectFit="contain" // Maintain aspect ratio while covering the container
      />
    </Box>
  );
};

export default Header;
