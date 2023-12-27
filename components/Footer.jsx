'use client';
import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon as Iconify } from '@iconify/react';

export default function Footer() {
  return (
    <Box display={'flex'}>
      <HStack spacing={2} mx="auto">
        <Iconify icon="material-symbols:lock-outline" color="#919191" />
        <Text color="#919191" fontSize="sm">
          End-to-end encryption
        </Text>
      </HStack>
    </Box>
  );
}
