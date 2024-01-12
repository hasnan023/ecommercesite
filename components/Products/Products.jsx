// pages/products.js
import { Grid, GridItem } from '@chakra-ui/react';
import { Box, Image, Heading, Center, Text, Input , InputRightElement,InputGroup, Tooltip} from '@chakra-ui/react';
import React,{ useState } from "react";

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img3.png',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img3.png',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img.png',
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img3.png',
  },
  {
    id: 5,
    name: 'Product 2',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img3.png',
  },
  {
    id: 6,
    name: 'Product 3',
    description: 'Everything you need to know about this product Everything you need to know about this product',
    image: '/img.png',
  },
];

const Products = () => {

    const[searchQuery, setSearchQuery] = useState('');
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <Box>
        <Center>
           <Text  fontSize="2xl">Featured Products</Text> 
        </Center>
        <Center>
  <InputGroup my={10} width="50%">
    <Input
      shadow="2xl"
      value={searchQuery}
      onChange={(event) => {
        setSearchQuery(event.target.value);
      }}
      placeholder="Search by Product name"
    />
    <InputRightElement children="🔍" color="gray.300" />
  </InputGroup>
</Center>
         
        
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }} gap={6} p={6} 
    flexDirection= {{base:"column", md:"row" }}>
      {filteredProducts.map((product) => (
        <GridItem key={product.id}>
          <Box maxW="sm"  borderRadius="lg" overflow="hidden" shadow="2xl">
            <Image src={product.image} alt={product.name} width="100%" height="25vh"/>
            <Box p="6">
              <Heading as="h4" size="md" mb="2" align="center">
                {product.name}
              </Heading>
              
              <Tooltip label={product.description} aria-label="description-tooltip" >
                
                <Text cursor="pointer" color="gray.600" align="center">{product.description.slice(0, 40)}..</Text> 
                
              </Tooltip>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
    </Box>
  );
};

export default Products;

