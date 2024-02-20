// components/Footer.js
import { Box, Flex, Text, Link, SimpleGrid, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" p={8} mt={40} align="center" shadow="2xl">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}  >
       
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            About Us
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod lacus quis
            leo pulvinar, quis ullamcorper urna ultricies.
          </Text>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Quick Links
          </Text>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Contact Us
          </Text>
          <Text>Email: info@example.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </Box>
      </SimpleGrid>

      <Flex justify="center" mt={8}>
        <Text>&copy; 2024 Furniture Store. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
