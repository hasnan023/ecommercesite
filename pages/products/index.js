import React from 'react'
import Products from '@/components/Products/Products'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Home/Navbar/Navbar'
import Footer from '@/components/Home/Footer/Footer'

const index = () => {
  return (
    <ChakraProvider>
      <Navbar/>
      <Products/>
      <Footer/>
    </ChakraProvider>
  )
}

export default index
