'use client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Icon as Iconify } from '@iconify/react';

export default function CustomAlert() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return (
    <Box>
      <Alert style={{ backgroundColor: '#4545FE' }} rounded={22}>
        <Iconify icon="ion:bulb-outline" color="#fff" />
        <Box>
          <AlertTitle style={{ color: '#fff' }}>Veerge Assistant!</AlertTitle>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          onClick={onClose}
          bgColor={'white'}
        />
      </Alert>
    </Box>
  );
}
