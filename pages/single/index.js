// pages/single/[productId].js
import { ChakraProvider } from "@chakra-ui/react";
import Single from "@/components/Single/Single";
import NavBar from "@/components/Home/Navbar/Navbar";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { productId } = router.query;

  if (!productId) {
    // Handle case where productId is not available
    return <div>Loading...</div>;
  }

  return (
    <ChakraProvider>
      <NavBar/>
      <Single productId={productId} />
    </ChakraProvider>
  );
};

export default index;
