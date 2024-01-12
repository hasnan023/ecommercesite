import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '@/components/Home/Home';
import Navbar from '@/components/Home/Navbar/Navbar';
import Products from '@/components/Products/Products';


const index = () => {
  return (
    <ChakraProvider>
       <Home/>
       

    </ChakraProvider>
   
  )
}

export default index;
