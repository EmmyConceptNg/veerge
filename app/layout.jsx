import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { Providers } from './providers';
import { Box, ColorModeScript } from '@chakra-ui/react';
const inter = Inter({ subsets: ['latin'] });
import theme from './theme';
import CustomAlert from '@/components/Alert';

export const metadata = {
  title: 'Veerge',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#F5F5F5' }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Providers>
          <Header />
          <Navbar />
          {children}
          <Box display="flex">
            <Box ml="auto" mr={2}>
              <Box position={'relative'} bottom={'200px'}>
                <CustomAlert />
              </Box>
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
