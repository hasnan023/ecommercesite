import React from 'react'
import Products from '@/components/Products/Products'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Home/Navbar/Navbar'

const index = () => {
  return (
    <ChakraProvider>
      <Navbar/>
      <Products/>
    </ChakraProvider>
  )
}

export default index
