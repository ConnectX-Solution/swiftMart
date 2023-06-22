
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { DI, DIProps, parseJwt } from "../../Core";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

type LoginI = {
  email: string;
  password: string;
};
const Login = (_props: DIProps) => {
  const toast = useToast()
  const { POST } = _props.di
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [credential, setCredential] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [credentialError, setcredentialError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleLoginFormSubmit: any = () => {
    if (credential.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && password != "") {
      setIsLoading(true);
      POST('login', {
        "credential": credential,
        "password": password
      }).then((e: any) => {
        if (e.success) {
          toast({
            title: ' Admin Account successfull login.',
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
          const tokenDecoded = parseJwt(e.token);
          _props.di.globalState.set(
            `${tokenDecoded['id']}_user_authenticated`,
            `true`
          );
          _props.di.globalState.set(
            `${tokenDecoded['id']}_auth_token`,
            e.token
          );
          _props.di.globalState.set(
            `id`,
            tokenDecoded['id']
          );

          navigate(`/panel/${tokenDecoded['id']}/dashboard`);
        } else {
          toast({
            title: e.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
        setIsLoading(false)

      })
    } else {
      if (!credential.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setcredentialError(true);
      }
      if (password == "") {
        setPasswordError(true);
      }
    }
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    isInvalid={credentialError}
                    value={credential}
                    onChange={(e: any) => {
                      if (e.target.value == "") {
                        setcredentialError(true)
                      } else {
                        setcredentialError(false)
                      }
                      setCredential(e.target.value)
                    }}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    isInvalid={passwordError}
                    value={password}
                    onChange={(e: any) => {
                      if (e.target.value == "") {
                        setPasswordError(true);
                      } else {
                        setPasswordError(false);
                      }
                      setPassword(e.target.value)
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"

                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                isLoading={isLoading}
                variant="solid"
                colorScheme="teal"

                width="full"
                onClick={() => {
                  handleLoginFormSubmit();
                }
                }
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Button colorScheme='teal' variant='link' onClick={() => navigate("/auth/signup")}>
          Sign Up
        </Button>

      </Box>
    </Flex>
  );
};

export default DI(Login);
