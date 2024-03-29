import React from 'react'
import Navbar2 from '@/components/Home/Navbar2/Navbar2';
import Header2 from '@/components/Home/Header2/Header2';
import { ChakraProvider } from '@chakra-ui/react';

const index = () => {
  return (
    <ChakraProvider>
      <Navbar2/>
      <Header2/>
    </ChakraProvider>
  )
}

export default index
