import React from 'react'
import { Box, Stack, Input } from '@chakra-ui/core'

export const Login = () => {
  return (
    <Box padding={4}>
      <Stack spacing={5}>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </Stack>
    </Box>
  )
}
