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
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DI, DIProps } from "../../Core";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEmail = chakra(MdAttachEmail)
interface SignupI {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
  cnfpassword: string;
}
const Signup = (_props: DIProps) => {
  const toast = useToast()
  const { POST } = _props.di
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationDetails, setRegistrationDetails] = useState<any>({
    firstname: "",
    lastname: "",
    username: "",
    userType: "admin",
    email: "",
    password: "",
    number: "",

  })
  const [registrationDetailsError, setRegistrationDetailsError] = useState({
    firstname: false,
    lastname: false,
    username: false,
    email: false,
    password: false,
    number: false,

  })
  const handleShowClick = () => setShowPassword(!showPassword);
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
                  <Input type="fname" placeholder="First Name"
                    value={registrationDetails.firstname}
                    isInvalid={registrationDetailsError.firstname}
                    onChange={(e: any) => {
                      if (e.target.value === "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, firstname: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, firstname: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, firstname: e.target.value }
                      })
                    }}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="lname" placeholder="Last Name"
                    isInvalid={registrationDetailsError.lastname}
                    value={registrationDetails.lastname}
                    onChange={(e: any) => {
                      if (e.target.value == "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, lastname: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, lastname: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, lastname: e.target.value }
                      })
                    }}
                  />
                </InputGroup>
              </FormControl>


              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="username" isInvalid={registrationDetailsError.username} placeholder="User Name" value={registrationDetails.username}
                    onChange={(e: any) => {
                      if (e.target.value === "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, username: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, username: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, username: e.target.value }
                      })

                    }} />
                </InputGroup>
              </FormControl>


              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEmail color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address"
                    isInvalid={registrationDetailsError.email}
                    value={registrationDetails.email}
                    onChange={(e: any) => {
                      if (e.target.value === "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, email: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, email: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, email: e.target.value }
                      })
                    }} />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input isInvalid={registrationDetailsError.number} type="number" placeholder="Mobile number" value={registrationDetails.number}
                    onChange={(e: any) => {
                      if (e.target.value == "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, number: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, number: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, number: e.target.value }
                      })
                    }} />
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    isInvalid={registrationDetailsError.password} value={registrationDetails.password}
                    onChange={(e: any) => {
                      if (e.target.value === "") {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, password: true }
                        })
                      } else {
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, password: false }
                        })
                      }
                      setRegistrationDetails((prev: any) => {
                        return { ...prev, password: e.target.value }
                      })
                    }}


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
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={() => {
                  let isValid = true;
                  Object.keys(registrationDetails).forEach((e: any) => {
                    if (e === "email") {

                      if (!registrationDetails[e].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        isValid = false;
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, [e]: true }
                        })

                      }
                    } else {
                      if (registrationDetails[e].trim() === "") {
                        isValid = false;
                        setRegistrationDetailsError((prev: any) => {
                          return { ...prev, [e]: true }
                        })

                      }
                    }
                  })
                  if (isValid) {
                    POST("register", registrationDetails).then((e: any) => {
                      if (e.success) {
                        toast({
                          title: e.message,
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        })
                        navigate("/auth/login")
                      } else {
                        toast({
                          title: e.message,
                          status: 'error',
                          duration: 5000,
                          isClosable: true,
                        })
                      }
                    })
                  }
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      <Box>
        already Sign Up user?{" "}
        <Button colorScheme='teal' variant='link' onClick={() => navigate("/auth/login")}>
          Login
        </Button>
      </Box>
    </Flex>

  );
};

export default DI(Signup);
