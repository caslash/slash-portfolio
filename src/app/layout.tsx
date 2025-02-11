import '@/styles/globals.css';
import { sfFont } from '@/styles/sfFont';

import PortfolioDock from '@/components/dock/navbar';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = { ...siteConfig };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sfFont.variable}`} suppressHydrationWarning>
      <body className="">
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <nav className="sticky top-8">
            <PortfolioDock />
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
