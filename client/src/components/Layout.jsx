import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { Header, Footer } from '.'

export const Layout = (props) => {
  return (
    <Flex minHeight="100vh" minWidth="100vw" align="center" justify="center">
      <Flex direction="column" minWidth="700px" minHeight="100vh" border="1px solid green" {...props}>
        <Header></Header>
        {props.children}
        <Footer></Footer>
      </Flex>
    </Flex>
  )
}
