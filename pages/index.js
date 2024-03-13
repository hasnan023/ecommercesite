import React from 'react'
import AuthForm from '@/components/Auth/AuthForm'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Home/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from "../store";

const index = () => {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <Navbar/>
      <AuthForm />
    </ChakraProvider>
    </Provider>
  );
}

export default index