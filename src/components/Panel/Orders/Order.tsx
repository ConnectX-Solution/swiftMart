import React, { useEffect, useState } from "react";
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
  DrawerFooter,
  useDisclosure,
  VStack,
  Stack,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  TagLabel,
  TagCloseButton,
  Tag,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  ModalFooter,
  FormControl,
  Modal,
} from "@chakra-ui/react";
import { Pagination, Popover, Table, } from "antd";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DI, DIProps } from "../../../Core";
import { title } from "process";

function Order(_props: DIProps) {
  const { uId } = useParams()
  const navigate = useNavigate();
  const toast = useToast()
  const { GET, POST } = _props.di
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const [gridData, setGridData] = useState<any>([]);
  const [totalOrder, setTotalOrder] = useState<number>(0);
  const [title, setTitle] = useState<any>("");
  const [search, setSearch] = useState("");
  const initialRef: any = React.useRef(null);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<any>()
  const finalRef = React.useRef(null)
  const [filterObject, setFilterObject] = useState<any>({
    activePage: 1,
    count: 5,
    search: "",
    id: "",
    status: "",
  });

  const [filterChange, setFilterChange] = useState<any>({
    search: "",
    id: "",
    status: "",
  });
  const filterQuery = Object.entries(filterObject).reduce((acc: any, [key, value]) => {
    if (value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {});

  const getOrder = () => {
    console.log("filterQuery Order:", filterQuery);

    POST("getOrder", filterQuery).then((e: any) => {
      if (e.success) {
        setTotalOrder(e.TotleCount)
        setGridData(e.data.map((e: any) => {
          return ({
            key: e._id,
            image: (
              <img
                src={e?.productDetails[0].Additional_Image || "https://cedcommercelogo.s3.us-east-2.amazonaws.com/no_image.png"}
                width="60px"
                height="60px"
                style={{ borderRadius: '4px' }}
                alt=""
              />
            ),
            title: e.productDetails[0].title,
            orderId: e._id,
            // status: e.orderStatus,
            status: (<>
              <Tag
                size={"md"}
                key={'md'}
                borderRadius='full'
                variant='solid'
                colorScheme='green'
              >
                <TagLabel>{e.orderStatus}</TagLabel>
              </Tag>
            </>),

            price: e.productDetails[0].price,
            quantity: e.productDetails[0].quantity,
            brand: e.productDetails[0].brand,
            template: e.productDetails[0].category,
            action: popOver(e)
          })
        }))
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
  const deleteOrder = () => {
    setLoading(true);
    POST("deleteOrder", { id: orderId }).then((e: any) => {
      if (e.success) {
        getOrder();
        toast({
          title: e.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: e.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      setLoading(false);

    })
  }

  useEffect(() => {
    getOrder()
  }, [filterObject])
  const popOver = (data: any) => {
    const content = (
      <div>
        <Box>
          <VStack spacing={"2"}>
            <Button size="md"

            > View </Button>
            <Button size="md" onClick={() => {
              setOrderId(data._id);
              setModelOpen(true);
            }}>Delete</Button>
          </VStack>

        </Box>
      </div>
    );
    return (<>
      <Popover placement="bottomRight" content={content} trigger="click">
        <Button>⋮</Button>
      </Popover>
    </>)

  }
  return (
    <>
      <Box m={6}>
        <Card pos={"sticky"} top={"14"} zIndex={"sticky"} >
          <Flex justify="space-between" alignItems={"center"} p={2} wrap="wrap">
            <Flex mt={0} mr={8} wrap="wrap" direction="column" gap={4}>
              <HStack spacing={"4"} wrap="wrap">
                <Box >
                  <InputGroup
                    flexWrap="wrap"
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaSearch />}
                    />
                    <Input
                      flexWrap="wrap"
                      placeholder="Search by Order title and status"
                      htmlSize={26}
                      value={search}
                      onChange={(e: any) => {
                        setSearch(e.target.value);

                        setFilterObject((prev: any) => {
                          return {
                            ...prev, search: e.target.value.trim()
                          }
                        })
                      }}
                      width={"auto"}
                    />
                  </InputGroup>
                </Box>
                {/* more filter  */}

              </HStack>
              <HStack spacing={3}>
                {
                  Object.keys(filterObject)?.map((e: any) => {
                    if (e != "activePage" && e != "count" && filterObject[e] != "") {
                      return (
                        <Tag
                          size="md"
                          key={e}
                          borderRadius='full'
                          variant='solid'
                          colorScheme='green'
                        >
                          <TagLabel>{`${e} : ${filterObject[e]}`}</TagLabel>
                          <TagCloseButton onClick={() => {
                            if (e === "search") {
                              setSearch("")
                              setFilterObject((prev: any) => {
                                return { ...prev, [e]: "" }
                              })
                            } else {
                              setFilterChange((prev: any) => {
                                return { ...prev, [e]: "" }
                              })
                              setFilterObject((prev: any) => {
                                return { ...prev, [e]: "" }
                              })
                            }
                          }} />
                        </Tag>)
                    }
                  })
                }


              </HStack>
            </Flex>

          </Flex>

        </Card>
        {/* product info grid  */}
        <Card mt={6}>
          <Stack width={"100"} align="end" p="3">
            <Table
              pagination={false}
              style={{ width: "100%", margin: "auto" }}
              columns={[
                {
                  title: "Image",
                  dataIndex: "image",
                },
                {
                  title: "Title",
                  dataIndex: "title",
                },
                {
                  title: "Order Id",
                  dataIndex: "orderId",
                },
                {
                  title: "Price",
                  dataIndex: "price",
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
                },
                {
                  title: "Status",
                  dataIndex: "status",
                },
                {
                  title: "Brand",
                  dataIndex: "brand",
                },
                {
                  title: "Template",
                  dataIndex: "template",
                },
                {
                  title: "Action",
                  align: "center",
                  width: "130px",
                  dataIndex: "action",
                },
              ]}
              dataSource={gridData}
              scroll={{ x: 1200 }}
            />
            <Pagination
              total={totalOrder}
              showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
              current={filterObject.activePage}
              pageSize={filterObject.count}
              pageSizeOptions={[5, 10, 15, 20, 25]}
              onShowSizeChange={(e: any) => {
                setFilterObject((prev: any) => {
                  return { ...prev, count: e }
                })

              }}
              onChange={(e: any) => {
                setFilterObject((prev: any) => {
                  return { ...prev, activePage: e }
                })

              }}
            />



          </Stack>



        </Card>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={modelOpen}
          isCentered
          onClose={() => {
            setModelOpen(false)
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              Are you sure you want to delete Order ?.
            </ModalBody>

            <ModalFooter>

              <HStack spacing={2}>

                <Button onClick={() => {
                  setModelOpen(false);
                }}>Cancel</Button>
                <Button colorScheme='red' isLoading={loading} mr={3} onClick={() => {
                  deleteOrder();
                  setModelOpen(false);
                }}>
                  Delete
                </Button>
              </HStack>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default DI(Order);
