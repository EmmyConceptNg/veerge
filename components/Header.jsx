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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { AiFillPlusSquare } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiNotification4Fill } from 'react-icons/ri';
import { FaCaretDown } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import FullCalendar from './Calendar';
import { useRef, useState } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const btnRef = useRef();

  const onCalendarOpen = () => {
    setIsCalendarOpen(true);
  };

  const onCalendarClose = () => {
    setIsCalendarOpen(false);
  };

  return (
    <>
      <Box bg={useColorModeValue('#191919', 'gray.900')} px={'150px'}>
        <Flex h="87px" alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src="/logo/logo.svg" alt="veerge" />
            </Box>
          </HStack>
          <HStack spacing={8} alignItems={'center'}>
            <Flex alignItems={'center'}>
              <IconButton
                colorScheme="white"
                aria-label="Add"
                fontSize="20px"
                icon={<AiFillPlusSquare />}
              />
              <IconButton
                ref={btnRef}
                onClick={onCalendarOpen}
                colorScheme="white"
                aria-label="Add"
                fontSize="20px"
                icon={<FaRegCalendarAlt />}
              />
              <IconButton
                colorScheme="white"
                aria-label="Add"
                fontSize="20px"
                icon={<RiNotification4Fill />}
              />
            </Flex>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <HStack spacing="10px">
                  <Box>
                    <Avatar bg="white" src="/icon/person.svg" />
                  </Box>
                  <Box>
                    <Text fontSize="md" color="#fff">
                      Ahmed Ali
                    </Text>
                  </Box>
                  <IconButton
                    colorScheme="white"
                    aria-label="Add"
                    fontSize="20px"
                    icon={<FaCaretDown />}
                  />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {onCalendarOpen && (
        <FullCalendar
          isOpen={isCalendarOpen}
          onClose={onCalendarClose}
          btnRef={btnRef}
        />
      )}
    </>
  );
}
