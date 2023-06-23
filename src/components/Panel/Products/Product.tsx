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

function Product(_props: DIProps) {
  const { uId } = useParams()
  const navigate = useNavigate();
  const toast = useToast()
  const { GET, POST } = _props.di
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const [gridData, setGridData] = useState<any>([]);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [title, setTitle] = useState<any>("");
  const [search, setSearch] = useState("");
  const initialRef: any = React.useRef(null);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState<any>()
  const finalRef = React.useRef(null)
  const [filterObject, setFilterObject] = useState<any>({
    activePage: 1,
    count: 5,
    title: "",
    category: "",
    price: "",
    brand: "",
    quantity: "",
    search: "",
  });

  const [filterChange, setFilterChange] = useState<any>({
    title: "",
    category: "",
    price: "",
    brand: "",
    quantity: "",
    search: "",
  });
  const filterQuery = Object.entries(filterObject).reduce((acc: any, [key, value]) => {
    if (value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {});

  const getProduct = () => {
    POST("getProduct", filterQuery).then((e: any) => {
      if (e.success) {
        setTotalProduct(e.TotleCount)
        setGridData(e.data.map((e: any) => {
          return ({
            key: e._id,
            image: (
              <img
                src={e?.Additional_Image || "https://cedcommercelogo.s3.us-east-2.amazonaws.com/no_image.png"}
                width="60px"
                height="60px"
                style={{ borderRadius: '4px' }}
                alt=""
              />
            ),
            title: e.title,
            price: e.price,
            quantity: e.quantity,
            brand: e.brand,
            template: e.category,
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
  const deleteProduct = () => {
    setLoading(true);
    POST("deleteProduct", { id: productId }).then((e: any) => {
      if (e.success) {
        getProduct();
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
    getProduct()
  }, [filterObject])
  const popOver = (data: any) => {
    const content = (
      <div>
        <Box>
          <VStack spacing={"2"}>
            <Button size="md" > Edit  </Button>
            <Button size="md" onClick={() => {
              setProductId(data._id);
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
                      placeholder="Search by brand and title"
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
                <HStack spacing={"4"}>
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
                          <Input placeholder="Enter Brand"
                            value={filterChange.brand}
                            onChange={(e: any) => {
                              setFilterChange((prev: any) => {
                                return { ...prev, brand: e.target.value }
                              })

                            }}
                          />
                          <Input placeholder="Enter Title"
                            value={filterChange.title}
                            onChange={(e: any) => {
                              setFilterChange((prev: any) => {
                                return { ...prev, title: e.target.value }
                              })

                              setTitle(e.target.value)
                            }} />
                          <Input placeholder="Enter Category"
                            value={filterChange.category}
                            onChange={(e: any) => {
                              setFilterChange((prev: any) => {
                                return { ...prev, category: e.target.value }
                              })

                            }} />

                          <Input placeholder="Enter price"
                            value={filterChange.price}
                            onChange={(e: any) => {
                              setFilterChange((prev: any) => {
                                return { ...prev, price: e.target.value }
                              })

                            }} />
                          <Input placeholder="Enter Quantity"
                            value={filterChange.quantity}
                            onChange={(e: any) => {
                              setFilterChange((prev: any) => {
                                return { ...prev, quantity: e.target.value }
                              })

                            }} />
                        </Stack>
                      </DrawerBody>

                      <Flex justifyContent={"space-between"} m={4}>
                        <Button mr={3} onClick={() => {
                          setFilterChange((prev: any) => {
                            return { ...prev, price: "", quantity: "", brand: "", category: "", title: "" }
                          })
                          setFilterObject((prev: any) => {
                            return {
                              ...prev, price: "", quantity: "", brand: "", category: "", title: "", activePage: 1,
                            }
                          })
                          onClose;
                        }} colorScheme="orange">
                          Reset
                        </Button>
                        <Button colorScheme="blue" onClick={() => {
                          setFilterObject((prev: any) => {
                            return { ...prev, ...filterChange, activePage: 1 }
                          })
                        }}>Apply</Button>
                      </Flex>
                    </DrawerContent>
                  </Drawer>
                  <Box>
                    <Button colorScheme="blue" onClick={() => {
                      navigate(`/panel/${uId}/product/product-create`);
                    }}>Create Product</Button>
                  </Box>
                </HStack>
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
                  title: "Price",
                  dataIndex: "price",
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
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
              total={totalProduct}
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
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              Are you sure you want to delete product ?.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' isLoading={loading} mr={3} onClick={() => {
                deleteProduct();
                setModelOpen(false);
              }}>
                Save
              </Button>
              <Button onClick={() => {
                setModelOpen(false);
              }}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default DI(Product);
