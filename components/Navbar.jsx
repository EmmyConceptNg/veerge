'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import { AiFillPlusSquare } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiNotification4Fill } from 'react-icons/ri';
import { FaCaretDown } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Icon as Iconify } from '@iconify/react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { name: 'Dashboard', icon: 'fluent:home-16-filled', url: 'dashboard' },
    { name: 'Listings', icon: 'fluent:location-28-regular', url: 'listings' },
    { name: 'Users', icon: 'mingcute:user-3-line', url: 'users' },
    { name: 'Account', icon: 'solar:wallet-outline', url: 'account' },
    { name: 'Request', icon: 'solar:calendar-outline', url: 'request' },
    { name: 'Settings', icon: 'uil:setting', url: 'settings' },
  ];

  return (
    <>
      <Box
        px="150px"
        my={3}
        py={4}
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        display={{ sm: 'none', xs: 'none', md: 'block', lg: 'block' }}
      >
        <HStack alignItems={'center'} justifyContent="space-between">
          {Links.map((link, index) => (
            <Box
              key={index}
              as="a"
              px={3}
              py={2}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
              }}
              href={'#'}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Iconify width="25px" icon={link.icon} />
              {link?.name}
            </Box>
          ))}
          <Box display="flex">
            <InputGroup style={{ width: '319px' }}>
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                <Search2Icon />
              </InputRightElement>
              <Input
                placeholder="Search... properties, customers here"
                aria-label="search"
              />
            </InputGroup>
          </Box>
        </HStack>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}></Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
