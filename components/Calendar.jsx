import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function FullCalendar({ isOpen, onClose, btnRef }) {
  const [value, onChange] = useState(new Date());
  return (
    <Box bg="#0D0D0D">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Calendar</DrawerHeader>
          <DrawerBody>
            <Calendar
              onChange={onChange}
              value={value}
              style={{ backgroundColor: '#000' }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
