'use client';

import ThemeSwitcher from '@/components/navbar/themeswitcher';
import { siteConfig } from '@/config/site';
import { link as linkStyles, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import clsx from 'clsx';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function PortfolioNavbar() {
  const pathName = usePathname();

  return (
    <Navbar maxWidth="full" position="static">
      <NavbarBrand />
      <NavbarContent justify="center">
        <ul className="flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={pathName === item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
