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

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <Flex direction="column" p={4} align="center">
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Your Cart
      </Text>
      {cart?.items.length === 0 ? (
        <Text fontSize="lg">Your cart is empty.</Text>
      ) : (
        cart?.items.map((product, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            mb={4}
            width="100%"
            display="flex"
            alignItems="center"
          >
            <Image
              src={product.image}
              alt={product.name}
              boxSize="100px"
              objectFit="cover"
              marginRight="4"
            />
            <Flex direction="column" flex="1">
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="md" color="gray.600">
                ${product.price}
              </Text>
              {/* You can add more product details here */}
            </Flex>
            <Spacer />
            <IconButton
              aria-label="Remove from cart"
              icon={<Badge colorScheme="red">-</Badge>}
              // Dispatch an action to remove the product from the cart
              // Here, you should dispatch an action to remove the product from the cart
              // Example: onClick={() => dispatch(removeFromCart(product.id))}
            />
          </Box>
        ))
      )}
      <Button colorScheme="blue" size="lg" mt={4}>
        Checkout
      </Button>
    </Flex>
  );
}

export default Cart;
