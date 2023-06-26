import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import {
  MdHome,
  MdKeyboardArrowRight,
  MdProductionQuantityLimits,
  MdReorder,
} from "react-icons/md";
import React from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function PanelHeader(props: any) {
  const { uId, } = useParams();

  const navigate = useNavigate();
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const CFaUserAlt = chakra(FaUserAlt);
  const { state } = useLocation();

  //sidebar
  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        onClick={() => {
          props.onClick();
        }}
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={
              {
                // color: useColorModeValue("gray.600", "gray.300")
              }
            }
            as={icon}
          />
        )}

        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          eShop
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          icon={MdHome}
          onClick={(e: any) => {
            navigate(`/panel/${uId}/dashboard`, {
              state: { key: "Dashboard" },
            });
          }}
        >
          dashboard
        </NavItem>

        <NavItem
          icon={MdProductionQuantityLimits}
          onClick={(e: any) => {
            navigate(`/panel/${uId}/product`, {
              state: { key: "Product" },
            });
          }}
        >
          Product
        </NavItem>

        <NavItem
          icon={MdReorder}
          onClick={(e: any) => {
            navigate(`/panel/${uId}/order`, {
              state: { key: "Order" },
            });
          }}
        >
          Order
        </NavItem>
      </Flex>
    </Box>
  );
  console.log("props samiaa:", useParams()["*"]);


  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box pos="sticky" top="0" zIndex="sticky">
          <Flex
            as="header"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            <Flex px="4" py="5" align="center" display={{ base: " none ", md: "inline-flex" }}>
              <Text
                fontSize="2xl"
                ml="2"
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
              >
                eShop Online store
              </Text>
            </Flex>

            <Flex align="center">
              <Stack spacing={6} direction="row" align="center">
                <Icon
                  color="gray.500"
                  as={FaBell}
                  cursor="pointer"
                  size={25}
                  onClick={() => navigate(`/panel/${uId}/activities`)}
                />
                <CFaUserAlt color="gray.300" size={25} />
              </Stack>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Breadcrumb
            spacing="5px"
            separator={<ChevronRightIcon color="gray.500" />}
            ml={8}
            mt={2}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={(e: any) => {
                  navigate(`/panel/${uId}/dashboard`, {
                    state: { key: "Dashboard" },
                  });

                }}>E-shop</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => {
                navigate(`/panel/${uId}/${useParams()["*"]?.split("/")[0].trim()}`);

              }} >
                {useParams()["*"]?.split("/")[0]}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {
              useParams()["*"]?.split("/")[1] && (<>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => {
                    navigate(`/panel/${uId}/${useParams()["*"]?.split("/")[1]}`,);

                  }} >
                    {useParams()["*"]?.split("/")[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>)
            }
          </Breadcrumb>
        </Box>

        <Box m="auto" top="6">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
