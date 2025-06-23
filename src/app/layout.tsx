import { Box } from '@mui/material';
import { Geist, Geist_Mono, Inter } from 'next/font/google';

import { randomBackgrounds } from '../config/content/layoutResources';

import { DrawerNavigation } from './components/DrawerNavigation';

import './globals.css';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Basic Starwars Films App',
  description: 'Created with next.js, TypeScript, and MUI',
  authors: [{ name: 'Alvison Hunter' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            minWidth: '100vw',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `url(${
              randomBackgrounds[
                Math.floor(Math.random() * randomBackgrounds.length)
              ]
            })`,
          }}
        >
          <DrawerNavigation />
          <main style={{ flexGrow: 1, padding: '1rem' }}>
            {children}
          </main>
        </Box>
      </body>
    </html>
  );
}
