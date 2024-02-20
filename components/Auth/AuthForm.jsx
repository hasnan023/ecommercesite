import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import {
  Table,
  Thead,
  Tbody,
  useColorMode,
  Tfoot,
  Tr,
  Th,
  Button,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Tooltip,
  Text,
  Center,
  Heading,
  Box,
  Input,
  List,
  Divider,
  Br,
  OrderedList,
  ListItem,
  Flex,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";

const AuthForm = () => {
  const [avgRate, setAvgRate] = useState(0);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [boxState, setBoxState] = useState([]);
  const [openBoxes, setOpenBoxes] = useState([]);
  const [error,setError] = useState(null);
  const [valid,setIsValid] = useState(false);

    const [inputText, setInputText] = useState("");
    const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    const products = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          const averageRate =
            response.data.reduce((totalRat, data) => {
              return totalRat + data.rating.rate;
            }, 0) / response.data.length;
          setAvgRate(averageRate);
          setProducts(response.data);
          // setTimeout(()=>{
          //   setProducts(response.data);
          // },3000)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    products();
const localData = localStorage.getItem("addData");
if (localData) {
  setTextArray(JSON.parse(localData));
}
    // const localData = localStorage.getItem("addData")
    // setTextArray(JSON.parse(localData));
  }, [refresh]);

  console.log(products);

  //const filteredProduct = products.filter((product) => product.price > 50);

  const filterProducts = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const data = [
    {
      question: "whats ur name?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and pr",
    },
    { question: "whats ur realNamehhhhhhh?", answer: "hasnan2" },
    { question: "whats ur realNamegggggggg?", answer: "hasnan2" },
    { question: "whats ur realNamekkkkkkkk?", answer: "hasnan2" },
  ];

  // const handleToggleBox=(index)=> {
  //    setBoxState(boxState===index?null:index);

  // }

  const handleToggleBox = (index) => {
    console.log(index);
    console.log(openBoxes);
    if (openBoxes.includes(index)) {
      setOpenBoxes(openBoxes.filter((item) => item !== index));
    } else {
      setOpenBoxes([...openBoxes, index]);
    }
  };
  console.log(openBoxes);
  const { colorMode } = useColorMode();


 

 const handleKeyPress = () => {
   if (inputText.trim() !== "" && inputText.length>5) {
     const updatedArray = [...textArray, inputText.trim()];
     localStorage.setItem("addData", JSON.stringify(updatedArray));
     setTextArray(updatedArray);
     setInputText("");
     setError(null);
     setIsValid(false);
   } else{
     setError("charcters must be greater than 5");
     setIsValid(true);
      return;
   }
 };
  return (
    <div>
      {/* <Center mt={4} display="flex" flexDirection="column" gap={3}>
        <Heading as="h2" size="lg" color="grey">
          Product Details
        </Heading>
        <Input
          value={search}
          placeholder="search product"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          width="50%"
        />
      </Center>
      <br />
      <TableContainer mt={4}>
        <Table>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>image</Th>
              <Th>title</Th>
              <Th>price</Th>
              <Th>description</Th>
              <Th>Rating</Th>
            </Tr>
          </Thead>

          <Tbody>
            {filterProducts?.map((item, index) => (
              <>
                <Tr>
                  <Td>{item.id}</Td>
                  <Td>
                    <Image boxSize="70px" src={item.image} />
                  </Td>
                  <Td>
                    {" "}
                    <Tooltip label={item.title} placement="auto-start">
                      <Text> {item.title.slice(0, 30)}..</Text>
                    </Tooltip>
                  </Td>
                  <Td>${item.price}</Td>
                  <Td>
                    <Tooltip label={item.description} placement="auto-start">
                      <Text> {item.description.slice(0, 40)}..</Text>
                    </Tooltip>
                  </Td>
                  <Td>{item.rating.rate}</Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer> */}
      {/* //accordian */}
      <Box align="center" p={4}>
        <Heading p={4}> FAQ's </Heading>
        {data.map((qns, index) => (
          <Box
            key={index}
            border="1px solid gray"
            borderRadius={30}
            width="50%"
            mb={4}
          >
            <Flex
              p={4}
              onClick={() => handleToggleBox(index)}
              _hover={{
                cursor: "pointer",
                backgroundColor: colorMode == "light" ? "#fffdd0" : "gray",
              }}
              borderRadius={30}
            >
              <Text flex="1" justifyContent="flex-start">
                {qns.question}
              </Text>
              {openBoxes.includes(index) ? <FaAngleUp /> : <FaAngleDown />}
            </Flex>
            <Divider width="50%" />
            {openBoxes.includes(index) && (
              <Box p={4}>
                <Text>{qns.answer}</Text>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box align="center">
        <InputGroup justifyContent="center" alignItems="center" align="center">
          <Input
            type="text"
            borderRadius={30}
            valid={!error}
            focusBorderColor={error ? "red.300" : undefined}
            width="30%"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleKeyPress();
              }
            }}
            placeholder="Type and press Enter to add"
          />
          <InputRightAddon cursor="pointer" onClick={handleKeyPress}>
            Add
          </InputRightAddon>
        </InputGroup>
        {error && <Text color="red">{error}</Text>}
        <ul>
          {textArray?.map((text, index) => (
            <li mt={4} key={index}>
              {text}
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        
      </Box>
    </div>
  );
};
export default AuthForm;
