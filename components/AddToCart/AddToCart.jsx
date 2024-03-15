"use client";
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
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/actions/cartAction";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function AddToCart() {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    setCart(cartItems);
  }),
    [];

  const handleCheckout = () => {
    if (user && user.user != null) {
      router.push("/addToCart/checkout");
    } else {
      toast.error("Please login to proceed to checkout", {
        position: "bottom-center",
      });
    }
  };

  return (
    <Flex direction="column" p={4} align="center">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb={4}
        suppressHydrationWarning={true}
      >
        Your Cart
      </Text>
      {cart?.length == 0 ? (
        <Text fontSize="lg" suppressHydrationWarning={true}>
          Your cart is empty.
        </Text>
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
              boxSize="100px"
              objectFit="cover"
              marginRight="4"
            />
            <Flex direction="column" flex={1}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                suppressHydrationWarning={true}
              >
                {product.title}
              </Text>
              <Text
                fontSize="md"
                color="gray.600"
                suppressHydrationWarning={true}
              >
                ${product.price}
              </Text>
              {/* You can add more product details here */}
            </Flex>
            <Spacer />

            <Button
              onClick={() => {
                dispatch(increaseQuantity(product.id));
              }}
            >
              +
            </Button>

            <Text p={3}> {product.quantity}</Text>

            <Button
              onClick={() => {
                dispatch(decreaseQuantity(product.id));
              }}
            >
              -
            </Button>
            <Button
              bg="red.500"
              ml={2}
              colorScheme="red"
              color="white"
              onClick={() => {
                dispatch(removeFromCart(product.id));
              }}
            >
              <MdDelete />
            </Button>
          </Box>
        ))
      )}
      <Button colorScheme="blue" size="lg" mt={4} onClick={handleCheckout}>
        Checkout
      </Button>
    </Flex>
  );
}

export default AddToCart;
