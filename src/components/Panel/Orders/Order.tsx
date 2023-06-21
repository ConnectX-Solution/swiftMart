import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  Heading,
  Button,
  Flex,
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  Stack,
  Card,
} from "@chakra-ui/react";
import { Table } from "antd";
import { useLocation } from "react-router-dom";

function Order() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const {
    state: { key },
  } = useLocation();
  return (
    <>
      <Box m={6}>
        <Card pos={"sticky"} top={"14"} zIndex={"sticky"}>
          <Flex justify="space-between" alignItems={"center"} p={2}>
            <HStack spacing={10} mt={0} mr={10}>
              <Box>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaSearch />}
                  />
                  <Input
                    placeholder="Search by Order Id and title"
                    htmlSize={26}
                    width={"auto"}
                  />
                </InputGroup>
              </Box>

              {/* more filter  */}
              <Box>
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                  More Filter
                </Button>
              </Box>
              {/* more filter drawer  */}
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>More Filter</DrawerHeader>

                  <DrawerBody>
                    <Stack spacing={4}>
                      <Input placeholder="Enter Brand" />
                      <Input placeholder="Enter Tittle" />
                      <Input placeholder="Enter Category" />
                    </Stack>
                  </DrawerBody>

                  <Flex justifyContent={"space-between"} m={4}>
                    <Button mr={3} onClick={onClose} colorScheme="orange">
                      Reset
                    </Button>
                    <Button colorScheme="blue">Apply</Button>
                  </Flex>
                </DrawerContent>
              </Drawer>
            </HStack>
            {/* <Button colorScheme="blue">Create Product</Button> */}
          </Flex>
        </Card>
        {/* search feild  */}
        <Card mt={6}>
          <HStack>
            <Table
              style={{ width: "100%", margin: "auto" }}
              columns={[
                {
                  title: "Name",
                  dataIndex: "name",
                },
                {
                  title: "Age",
                  dataIndex: "age",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                },
                {
                  title: "Action",
                  dataIndex: "address",
                },
              ]}
              dataSource={[
                {
                  key: 1,
                  name: `Edward King `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 1,
                  name: `Edward King `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: ` King `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: `Edward  `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: `Edward  `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: `Edward  `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: `Edward  `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
                {
                  key: 2,
                  name: `Edward  `,
                  age: 32,
                  address: `London, Park Lane no. `,
                },
              ]}
            />
          </HStack>
        </Card>
      </Box>
    </>
  );
}

export default Order;
