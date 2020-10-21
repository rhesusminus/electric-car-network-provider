import React from 'react'
import { Box } from '@chakra-ui/core'

export const Station = ({ station }) => {
  return (
    <Box border="1px solid green" rounded="md" overflow="hidden" p={2} marginY={2}>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {station.name}
      </Box>
    </Box>
  )
}
