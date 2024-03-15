// pages/signup.js
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  Text,
  Link,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { firebase } from "../../Firebase";
// import { getAuth } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userAction";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const auth = getAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(userCredential);
        toast.success("Signed up successfully", {
          position: "bottom-left",
        });
        setIsRegistered(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        // ..
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success("Login successfully", {
          position: "bottom-left",
        });
        console.log("login");
        console.log(user);
        dispatch(login(user));
        router.push("/main");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box width="400px" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading mb={8}>Vola.pk</Heading>
        </Box>
        {isRegistered ? (
          <Box my={4} textAlign="left">
            <form onSubmit={handleInputSubmit} id="login">
              <Input
                type="email"
                placeholder="Email"
                variant="filled"
                mb={4}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="filled"
                  mb={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
              <Button colorScheme="teal" width="full" type="submit">
                Login
              </Button>
              <Text
                textAlign="center"
                mt={3}
                cursor="pointer"
                onClick={() => setIsRegistered(false)}
              >
                create new account?
              </Text>
            </form>
            {error && <Text color="red">{error}</Text>}
          </Box>
        ) : (
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Email"
                variant="filled"
                mb={4}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="filled"
                  mb={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
              <Button colorScheme="teal" width="full" type="submit">
                Sign Up
              </Button>
              <Text
                cursor={"pointer"}
                onClick={() => setIsRegistered(true)}
                textAlign="center"
                mt={3}
              >
                Already have an account?
              </Text>
            </form>
            {error && <Text color="red">{error}</Text>}
          </Box>
        )}
      </Box>
    </Flex>
  );
}
