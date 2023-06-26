import { Box, Button, Card, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Stack, useToast } from '@chakra-ui/react'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { DI, DIProps } from '../../../Core'

function ProductEdit(_props: DIProps) {
    console.log("Props:", _props.location.state.id, "sami:", _props);

    const { POST, GET } = _props.di;

    const toast = useToast()
    const [productDetails, setProductDetails] = useState<any>({
        title: "",
        Additional_Image: "",
        brand: "",
        category: "",
        description: "",
        rating: "",
        price: "",
        discountPrice: "",
        quantity: ""
    })

    const [productDetailsErroe, setProductDetailsError] = useState<any>({
        title: false,
        Additional_Image: false,
        brand: false,
        category: false,
        description: false,
        rating: false,
        price: false,
        discountPrice: false,
        quantity: false
    })
    const [isLoading, setIsloading] = useState(false);
    const GetProduct = () => {
        POST("getSingleProduct", {
            id: _props.location.state.id
        }).then((e: any) => {
            if (e.success) {
                setProductDetails((prev: any) => {
                    return {
                        ...prev, title: e.data.title,
                        Additional_Image: e.data.Additional_Image,
                        brand: e.data.brand,
                        category: e.data.category,
                        description: e.data.description,
                        rating: e.data.rating,
                        price: e.data.price,
                        discountPrice: e.data.discountPrice,
                        quantity: e.data.quantity
                    }
                })

            }
        })

    }
    useEffect(() => {
        GetProduct()
    }, [])

    const SaveProduct = () => {
        let isValid = false;
        Object.keys(productDetails).forEach((e: any) => {
            if (productDetails[e] === "") {
                return isValid = true;
            }
        })
        if (!isValid) {
            setIsloading(true);
            const ProductData = productDetails;
            ProductData.id = _props.location.state.id;
            POST("editProduct", productDetails).then((e: any) => {
                if (e.success) {
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
                setIsloading(false);

            })
        }


    }
    return (
        <>
            <Box>
                <Card mt={8} m={12}>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl isInvalid={productDetailsErroe.title}  >
                                    <FormLabel>Title</FormLabel>
                                    <Input type='text'
                                        value={productDetails.title}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, title: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, title: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, title: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                    {!productDetailsErroe.title ? (
                                        <FormHelperText>
                                            Enter the product title.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>product title is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.Additional_Image}>
                                    <FormLabel>Image</FormLabel>
                                    <Input type='text'
                                        value={productDetails.Additional_Image}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, Additional_Image: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, Additional_Image: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, Additional_Image: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                    {!productDetailsErroe.Additional_Image ? (
                                        <FormHelperText>
                                            Enter the product Image.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Product Image is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.category}>
                                    <FormLabel>Category</FormLabel>
                                    <Input type='text'
                                        value={productDetails.category}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, category: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, category: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, category: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                    {!productDetailsErroe.category ? (
                                        <FormHelperText>
                                            Enter the product category type.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>category is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.brand}>
                                    <FormLabel>Brand</FormLabel>
                                    <Input type='text'
                                        value={productDetails.brand}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, brand: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, brand: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, brand: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                    {!productDetailsErroe.brand ? (
                                        <FormHelperText>
                                            Enter the product brand.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>brand is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.description}>
                                    <FormLabel>Description</FormLabel>
                                    <Input type='text'
                                        value={productDetails.description}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, description: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, description: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, description: e.target.value
                                                }
                                            })
                                        }}

                                    />
                                    {!productDetailsErroe.description ? (
                                        <FormHelperText>
                                            Enter the product description
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Description is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.rating}>
                                    <FormLabel>Rating</FormLabel>
                                    <Input type='text'
                                        value={productDetails.rating}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, rating: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, rating: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, rating: e.target.value
                                                }
                                            })
                                        }}

                                    />
                                    {!productDetailsErroe.rating ? (
                                        <FormHelperText>
                                            Enter the product rating
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>rating is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.price}>
                                    <FormLabel>Price</FormLabel>
                                    <Input type='text'
                                        value={productDetails.price}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, price: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, price: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, price: e.target.value
                                                }
                                            })
                                        }}

                                    />
                                    {!productDetailsErroe.price ? (
                                        <FormHelperText>
                                            Enter the product price
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Price is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.discountPrice}>
                                    <FormLabel>Discount Price</FormLabel>
                                    <Input type='text'
                                        value={productDetails.discountPrice}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {

                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, discountPrice: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, discountPrice: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, discountPrice: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                    {!productDetailsErroe.discountPrice ? (
                                        <FormHelperText>
                                            Enter the discount Price
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Discount Price is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={productDetailsErroe.quantity}>
                                    <FormLabel>Quantity</FormLabel>
                                    <Input type='text'
                                        value={productDetails.quantity}
                                        onChange={(e: any) => {
                                            if (e.target.value !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, quantity: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, quantity: true
                                                    }
                                                })
                                            }
                                            setProductDetails((prev: any) => {
                                                return {
                                                    ...prev, quantity: e.target.value
                                                }
                                            })
                                        }}

                                    />
                                    {!productDetailsErroe.quantity ? (
                                        <FormHelperText>
                                            Enter the product quantity
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Quantity is required.</FormErrorMessage>
                                    )}
                                </FormControl>



                                <Button
                                    borderRadius={0}
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                    isLoading={isLoading}
                                    onClick={() => {
                                        Object.keys(productDetails).map((e: any) => {
                                            if (productDetails[e] !== "") {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, [e]: false
                                                    }
                                                })
                                            } else {
                                                setProductDetailsError((prev: any) => {
                                                    return {
                                                        ...prev, [e]: true
                                                    }
                                                })
                                            }
                                        })

                                        SaveProduct();

                                    }}
                                >
                                    save
                                </Button>

                            </Stack>


                        </form>
                    </Box>


                </Card>
            </Box>
        </>
    )
}

export default DI(ProductEdit)