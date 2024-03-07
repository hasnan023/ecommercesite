// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'; // Import your Redux store
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Home/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />

    </Provider>
  );
}

export default MyApp;
