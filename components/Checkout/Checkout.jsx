import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Input,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const addressInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const subtotals = cart.map((product) => product.quantity * product.price);
  const total = subtotals.reduce((acc, curr) => acc + curr, 0);

  const handleKeyDown = (event, preRef, nextRef) => {
    if (event.key === "ArrowDown" && nextRef.current) {
      nextRef.current.focus();
    }
     else if (event.key === "ArrowUp" && preRef.current) {
       preRef.current.focus();
     }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        {/* Customer Information Section */}
        <Box p={5} boxShadow="lg">
          <Heading mb={6}>Customer Information</Heading>
          <Input
            ref={nameInputRef}
            placeholder="Name"
            mb={4}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, nameInputRef, addressInputRef )}
          />
          <Input
            ref={addressInputRef}
            placeholder="Address"
            mb={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(e, nameInputRef, phoneNumberInputRef)
            }
          />
          <Input
            ref={phoneNumberInputRef}
            placeholder="Phone Number"
            mb={4}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, addressInputRef, emailInputRef)}
          />
          <Input
            ref={emailInputRef}
            placeholder="Email"
            mb={4}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(e, phoneNumberInputRef, emailInputRef)
            }
          />
        </Box>

        {/* Cart Information Section */}
        <Box p={5} boxShadow="lg" mb={4} height="50vh" overflow="auto">
          <Heading mb={6}>Cart Information</Heading>
          {cart.map((product, index) => (
            <Flex key={index} mb={4} alignItems="center">
              <Image
                src={product.image}
                boxSize="100px"
                objectFit="cover"
                marginRight="4"
              />
              <Flex direction="column">
                <Text>Product Name: {product.title}</Text>
                <Text>Product Price: {product.price}</Text>
                <Text>Quantity: {product.quantity}</Text>
                <Text>Subtotal: ${subtotals[index].toFixed(2)}</Text>
              </Flex>
            </Flex>
          ))}
          <Flex direction="column">
            <Text alignSelf="flex-end" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
          </Flex>
        </Box>
      </Grid>

      {/* Payment Button */}
      <Box mt={10} textAlign="center">
        <Button
          colorScheme="teal"
          size="lg"
          isDisabled={!name || !address || !phoneNumber || !email}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
