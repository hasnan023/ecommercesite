import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import Barcode from "react-barcode";


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
  InputRightElement,
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
  Progress,
  InputGroup,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";
import { FormGroup } from "react-bootstrap";
import QRCode from "react-qr-code";

const AuthForm = () => {
  const [avgRate, setAvgRate] = useState(0);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [boxState, setBoxState] = useState([]);
  const [openBoxes, setOpenBoxes] = useState([]);
  const [error, setError] = useState(null);
  const [valid, setIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);
  const [inputText, setInputText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [voiceDetect, setVoiceDetect] = useState("");
  const [color, setColor] = useColor("#121212");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [barValue,setBarValue] = useState(0);
  const [barcodeData, setBarcodeData] = useState("");
   const [qrCodeData, setQrCodeData] = useState("");
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

  const pageSize =  7;
  useEffect(() => {
    const products = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          const totalP = response.data.length / pageSize;
          setTotalPages(totalP.toPrecision(1));
          console.log(totalP.toPrecision(1));
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
  }, [refresh, currentPage]);

  console.log(products);
  const startIndex = (currentPage -1 ) *pageSize;
  const endIndex = startIndex + (pageSize) 
  const currentPageData = products.slice(startIndex, endIndex);
  console.log(currentPageData);
  console.log(startIndex, endIndex);
  //const filteredProduct = products.filter((product) => product.price > 50);

  const filterProducts = currentPageData.filter(
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

  var variable = 10;

  console.log(variable);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(null);
    }
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const arrayData = ["a", "b", "c"];
  arrayData;
  console.log(arrayData);

  const handleKeyPress = () => {
    if (inputText.trim() !== "" && inputText.length > 5) {
      const updatedArray = [...textArray, inputText.trim()];
      localStorage.setItem("addData", JSON.stringify(updatedArray));
      setTextArray(updatedArray);
      setInputText("");
      setError(null);
      setIsValid(false);
    } else {
      setError("charcters must be greater than 5");
      setIsValid(true);
      return;
    }
  };

  const handleInputChange = (event) => {
    setBarcodeData(event.target.value);
  };

  const handleQrInputChange = (event) => {
    setQrCodeData(event.target.value);
  };


    const generatePassword = () => {
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()-_=+";

      let chars = "";

      if (includeUppercase) chars += uppercaseChars;
      if (includeLowercase) chars += lowercaseChars;
      if (includeNumbers) chars += numberChars;
      if (includeSymbols) chars += symbolChars;

      let generatedPassword = "";
      for (let i = 0; i < passwordLength; i++) {
        generatedPassword += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      }

      setPassword(generatedPassword);
    };


  return (
    <div>
      <Center mt={4} display="flex" flexDirection="column" gap={3}>
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
        <Flex
          mt="20px"
          align="center"
          justifyContent="flex-end"
          gap={4}
          mr={14}
        >
          <Button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>
            previous
          </Button>
          <Text>{currentPage}</Text>
          <Button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
          >
            Next
          </Button>
        </Flex>
      </TableContainer>
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
        <InputGroup justifyContent="center">
          <Input type="file" onChange={handleFileChange} width="30%" />
          {selectedFile && (
            <InputRightElement width="30%">
              <p>{selectedFile.name}</p>
            </InputRightElement>
          )}
        </InputGroup>
        {previewURL && (
          <Box mt={2} justifyContent="center">
            <Image src={previewURL} alt="Preview" maxW="200px" maxH="200px" />
          </Box>
        )}
      </Box>

      <Box mt="20px" display="flex" justifyContent="center" gap={3}>
        <Box
          boxSize="60px"
          alignItems="center"
          mt="20px"
          border="1px"
          bgColor={color.hex}
        ></Box>

        <Box mt="20px" width={200} height={200}>
          <ColorPicker
            color={color}
            onChange={setColor}
            hideInput={["rgb", "hsv", "hex"]}
          />
          {console.log(color)}
        </Box>
      </Box>

      <Flex mt="90px" justifyContent="center">
        <Progress width="30%" value={barValue}></Progress>
        <Box ml="20px">
          <Text fontSize="2xl" fontWeight="bold">
            {barValue}%
          </Text>
        </Box>
        <Button
          mt={5}
          onClick={() => setBarValue(Math.min(barValue + 25), 100)}
        >
          +
        </Button>
        <Button mt={5} onClick={() => setBarValue(Math.min(barValue - 25), 0)}>
          -
        </Button>
      </Flex>

      <Box align="center" padding={3} gap={5}>
        <Input
          border="1px solid grey"
          width="70%"
          padding={2}
          type="text"
          value={barcodeData}
          onChange={handleInputChange}
          placeholder="Enter barcode data"
          marginBottom={4}
        />
        {barcodeData && <Barcode value={barcodeData} />}
      </Box>

      <Box align="center" padding={3} gap={5}>
        <Input
          border="1px solid grey"
          width="70%"
          padding={2}
          type="text"
          value={qrCodeData}
          onChange={handleQrInputChange}
          placeholder="Enter barcode data"
          marginBottom={4}
        />
        {qrCodeData && <QRCode value={qrCodeData} />}
      </Box>

      <Box align="center">
        <Heading>Password Generator</Heading>
        <Box mt={3}>
          <label>Password Length:</label>
          <Input
            ml={5}
            width="8%"
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </Box>
        <Box justifyContent="center"display="flex" flexDirection="row" gap={5}>
          <label>Include Uppercase Letters:</label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label>Include Lowercase Letters:</label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />

          <label>Include Numbers:</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />

          <label>Include Symbols:</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
        </Box>

        <Button mt={3} onClick={generatePassword}>Click to Generate Password</Button>
        <Box mt={3}>
          <label ml={3}>Generated Password:</label>
          <Input type="text" value={password} readOnly width="30%" />
        </Box>
      </Box>
    </div>
  );
};
export default AuthForm;
