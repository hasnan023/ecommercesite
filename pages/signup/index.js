import Navbar from '@/components/Home/Navbar/Navbar'
import SignUp from '@/components/Signup/Signup'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  return (
   <ChakraProvider>
    <Navbar/>
    <SignUp/>
   </ChakraProvider>
  )
}

export default index