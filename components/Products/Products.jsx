// pages/products.js
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Box,
  Image,
  Heading,
  Center,
  Button,
  Link,
  Text,
  Input,
  HStack,
  Select,
  InputRightElement,
  Spinner,
  InputGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
} from "@chakra-ui/react";
  

import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const[filter, setFilter] = useState(null);
  const [categories, setCategories] = useState([]);
  const[loading, setLoading] = useState(null);
  const[rangeValue, setRangeValue] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        
      const unFilteredCategories = data.map((product) => product.category);
        setCategories(Array.from(new Set(unFilteredCategories))); 
      setLoading(false);
      }
      console.log(categories);
    };
    fetchProducts();
  }, [refresh]);
  console.log(products);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = products.filter((product) => {
    return (
      product?.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter ? product?.category === filter : true) && (
        rangeValue.length > 0
          ? product.price >= rangeValue[0] && product.price <= rangeValue[1]
          : true
      )
    );
  });
 const clearAll = () => {
   setFilter(null);
   setSearchQuery("");
 };   console.log(filter);

const rangeHandler = (newValues) => {
  setRangeValue(newValues);
  console.log(newValues);
}

  return (
    <Box>
      <Center>
        <Text mt={10} fontSize="2xl">
          Featured Products
        </Text>
      </Center>
      <Center my={8} gap={5} flexDirection={{ base: "column", md: "row" }}>
        <InputGroup width="50%">
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
        <>
          <Select
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
            width="100"
            placeholder="search by category"
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </Select>

          <Button onClick={clearAll}>x</Button>
        </>
        <Box width="10%">
          <RangeSlider 
            aria-label={["min", "max"]}
            defaultValue={[0, 100]}
            onChange={rangeHandler}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack bg={"red"} />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Box
            mt={0}
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
          >
            <p fontSize="5px">${rangeValue[0]}</p>
            <p fontSize="5px">${rangeValue[1]}</p>
          </Box>
        </Box>
      </Center>

      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }}
          gap={6}
          p={6}
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          {filteredProducts.map((product) => (
            <GridItem key={product.id}>
              <Box maxW="sm" borderRadius="lg" overflow="hidden" shadow="2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  width="80%"
                  height="35vh"
                />
                <Box p="6">
                  <Tooltip label={product.title} aria-label="title-tooltip">
                    <Heading
                      as="h4"
                      size="md"
                      mb="2"
                      align="center"
                      cursor="pointer"
                    >
                      {product.title.slice(0, 20)}
                    </Heading>
                  </Tooltip>
                  <Text>${product.price}</Text>
                  <Tooltip
                    label={product.description}
                    aria-label="description-tooltip"
                  >
                    <Text cursor="pointer" color="gray.600" align="center">
                      {product.description.slice(0, 20)}..
                    </Text>
                  </Tooltip>
                  <Text>
                    ⭐ {product.rating.rate} ({product.rating.count})
                  </Text>

                  <Link href={`/single?productId=${product.id}`} passHref>
                    <Button>Shop</Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
