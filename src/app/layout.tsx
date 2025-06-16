import { Geist, Geist_Mono, Inter } from 'next/font/google';

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
        <div style={{ display: 'flex' }}>
          <DrawerNavigation />
          <main style={{ flexGrow: 1, padding: '1rem' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
