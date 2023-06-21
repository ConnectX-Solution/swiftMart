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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import React from "react";
import { useLocation } from "react-router-dom";
function Dashboard(_props: any) {
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
          <Text fontSize="md">Total Produt: 50</Text>
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
          <Text fontSize="md">Total Order: 23</Text>
        </Box>
      </Flex>
    </>
  );
}
export default Dashboard;
