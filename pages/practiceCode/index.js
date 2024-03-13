import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Practice from '@/components/practice/practice'

const index = () => {
  return (
    <ChakraProvider>
        <Practice/>
    </ChakraProvider>
  )
}

export default index