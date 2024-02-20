import React from 'react'
import AddToCart from '../../components/AddToCart/AddToCart';
import Navbar from '@/components/Home/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

const index = () => {
  return (
    <ChakraProvider>
        <Navbar/>
      <AddToCart/>
    </ChakraProvider>
  )
}

export default index
