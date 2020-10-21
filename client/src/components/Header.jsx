import React from 'react'
import { Box, Flex, IconButton } from '@chakra-ui/core'
import { AiOutlineUser } from 'react-icons/ai'
import { SiElectron } from 'react-icons/si'

export const Header = () => {
  return (
    <header>
      <Flex as="nav" align="center" justify="space-between" p={3} bg="gray.700" color="gray.50">
        <Box as={SiElectron} size="24px" />
        <Box>
          Sign in <Box as={AiOutlineUser} size="18px" />
        </Box>
      </Flex>
    </header>
  )
}
