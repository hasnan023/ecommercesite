import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Checkout from '@/components/Checkout/Checkout'
import Navbar from '@/components/Home/Navbar/Navbar';

const index = () => {
  return (
    <ChakraProvider>
      <Navbar/>
      <Checkout />
    </ChakraProvider>
  );
}

export default index
