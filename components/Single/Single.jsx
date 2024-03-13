// pages/product/[productId].js
import { Box, Flex, Image,Center, Text , Button, Spinner} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";



const ProductPage = () => {
    const router = useRouter();
    const[loading,setLoading] =useState(false);
    const { productId } = router.query;
    
    const[product,setProduct] = useState(null);
    console.log(productId);
    const dispatch = useDispatch();

useEffect(()=>{
    const fetchProduct = async () => {
        setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      }
    }
    fetchProduct();
},[])

const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    
}

  return (
    <Box>
      {loading ? (
        <Center mt={4}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Flex p={"50px"} flexDirection={{ base: "column", md: "row" }}>
            {/* Left side with product details */}

            <Box p={4} justifyContent="flex-start" flex={2}>
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {product?.title}
              </Text>
              <Box display="flex" gap={5}>
                <Text fontSize="md" mb={4}>
                  Category: {product?.category}
                </Text>
                <Text fontSize="lg" mb={4}>
                  Rating: {product?.rating.rate}
                </Text>
              </Box>
              <Text fontSize="md" mb={4}>
                Description: {product?.description}
              </Text>
            </Box>
            {/* Right side with product image */}
            <Box flex={1} flexDirection={{ base: "column", md: "row" }}>
              <Image
                src={product?.image}
                alt={product?.title}
                boxSize={"350px"}
                objectFit="contain"
                cursor="pointer"
              />
            </Box>
          </Flex>

          <Center>
            <Button
              colorScheme="teal"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </Button>
          </Center>
        </>
      )}
    </Box>
  );
};




export default ProductPage;
