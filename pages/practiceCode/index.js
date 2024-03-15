import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Practice from '@/components/practice/practice'
import Navbar from '@/components/Home/Navbar/Navbar'
import AuthForm from '@/components/Auth/AuthForm'

const index = () => {
  return (
    <ChakraProvider>
        <Navbar/>
     <AuthForm/>
    </ChakraProvider>
  )
}

export default index