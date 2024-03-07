import { addToCart } from "@/store/actions/cartAction";
import {
  Flex,
  Box,
  Text,
  Button,
  IconButton,
  Image,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AddToCart=() =>{
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  return (
    <Flex flexDirection="column" p={4} align="center" suppressHydrationWarning>
      <Text suppressHydrationWarning fontSize="3xl" fontWeight="bold" mb={4}>
        Your Cart
      </Text>
      {cart?.length == 0 ? (
        <Text suppressHydrationWarning fontSize="lg">Your cart is empty.</Text>
      ) : (
        cart?.map((product, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            mb={4}
            width="100%"
            display="flex"
            alignItems="center"
            suppressHydrationWarning
          >
            <Image
            suppressHydrationWarning

              src={product.image}
              alt={product.name}
              boxSize="100px"
              objectFit="cover"
              marginRight="4"
            />
            <Flex flexDirection="column" suppressHydrationWarning >
              <Text suppressHydrationWarning fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text suppressHydrationWarning fontSize="md" color="gray.600">
                ${product.price}
              </Text>
              {/* You can add more product details here */}
            </Flex>
            <Button suppressHydrationWarning colorScheme="red">
              Remove
              </Button>
          </Box>
        ))
      )}
      <Button suppressHydrationWarning colorScheme="blue" size="lg" mt={4}>
        Checkout
      </Button>
    </Flex>
  );
}

export default AddToCart;