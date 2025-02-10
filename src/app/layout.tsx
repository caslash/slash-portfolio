import '@/styles/globals.css';
import { sfFont } from '@/styles/sfFont';

import PortfolioNavbar from '@/components/navbar/navbar';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = { ...siteConfig };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sfFont.variable}`} suppressHydrationWarning>
      <body>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <PortfolioNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
