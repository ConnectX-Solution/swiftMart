// Chakra imports
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Flex,
  Box,
  useToast,

} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DI } from "../../../Core";
function Dashboard(_props: any) {

  const toast = useToast()

  const { GET, POST } = _props.di
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const getProductCount = () => {
    POST("getproduct").then((e: any) => {
      if (e.success || e.status == 200) {
        setProductCount(e.TotleCount);
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
  const getOrderCount = () => {
    POST("getOrder").then((e: any) => {
      if (e.success || e.status == 200) {
        setOrderCount(e.TotleCount);
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
  useEffect(() => {
    getProductCount();
    getOrderCount();
  }, [])
  const { state } = useLocation();
  return (
    <>
      <Flex justifyContent={"space-evenly"} p="3">
        <Box
          width="container.md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={2}
          m={4}
        >
          <Heading as="h2" size="md" mb={2}>
            Product Details
          </Heading>
          <Text fontSize="md">Total Produt:{productCount}</Text>
        </Box>

        <Box
          width="container.md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={2}
          m={4}
        >
          <Heading as="h2" size="md" mb={2}>
            Order Details
          </Heading>
          <Text fontSize="md">Total Order:{orderCount}</Text>
        </Box>
      </Flex>
    </>
  );
}
export default DI(Dashboard);
