// pages/about.js
import Footer from '@/components/Home/Footer/Footer';
import Navbar from '@/components/Home/Navbar/Navbar';
import { Box, Container, Heading, Text,Layout, Image, Flex } from '@chakra-ui/react';


const index = () => {
  return (
    <>
    
    
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" mb={6} textAlign="center">
          About Us
        </Heading>

        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" mb={10}>
          

          <Box ml={{ md: 8 }}>
            <Text fontSize="lg">hello</Text>
          </Box>
        </Flex>

        <Box bg="gray.100" p={8} borderRadius="lg" mb={8}>
          <Heading as="h2" fontSize="xl" mb={4}>
            Our Mission
          </Heading>
          <Text>
            We are dedicated to providing high-quality furniture that combines functionality with elegance. Our mission is to create spaces that inspire and enhance the lives of our customers.
          </Text>
        </Box>

        <Box bg="gray.100" p={8} borderRadius="lg" mb={8}>
          <Heading as="h2" fontSize="xl" mb={4}>
            Our Values
          </Heading>
          <Text>
            At our core, we value craftsmanship, sustainability, and customer satisfaction. Every piece of furniture is crafted with precision and care, using eco-friendly materials to contribute to a better world.
          </Text>
        </Box>

        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          Contact us for more information or to explore our exquisite furniture collection.
        </Text>
      </Container>
    
    <Footer/>
    </>
  );
};

// Simulate fetching about information from an API or database


export default index;
