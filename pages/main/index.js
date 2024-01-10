import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';

const index = () => {
  return (
    <ChakraProvider>
       <Navbar/>
    </ChakraProvider>
   
  )
}

export default index;
