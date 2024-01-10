import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../../components/Home/Navbar/Navbar';
import Header from '../../components/Home/Header/Header';


const index = () => {
  return (
    <ChakraProvider>
       <Navbar/>
       <Header/>

    </ChakraProvider>
   
  )
}

export default index;
