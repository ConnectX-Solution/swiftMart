import { Box, Button, Card, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Stack } from '@chakra-ui/react'
import { Input } from 'antd'
import React from 'react'

function ProductCreate() {
    return (
        <>
            <Box>
                <Card mt={6} m={6}>
                    <Stack width={"100"} align="end" p="3" spacing={4} alignItems="center" alignContent="center" >
                        <FormControl isInvalid={true}  >
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!true ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={true}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!true ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={true}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!true ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={true}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!true ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={true}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!true ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <Button  >Save</Button>

                    </Stack>

                </Card>
            </Box>
        </>
    )
}

export default ProductCreate