import React from 'react'
import AuthForm from '@/components/Auth/AuthForm'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Home/Navbar/Navbar';

const index = () => {
  return (
    <ChakraProvider>
      <AuthForm />
    </ChakraProvider>
  );
}

export default index