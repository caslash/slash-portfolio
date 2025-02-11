import { Braces, House, LucideProps, Rss } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type SiteConfig = typeof siteConfig;

type NavItem = {
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  href: string;
};

export const siteConfig: { name: string; description: string; navItems: NavItem[] } = {
  name: 'Portfolio',
  description: "Cameron Slash's portfolio",
  navItems: [
    {
      label: 'Home',
      icon: House,
      href: '/',
    },
    {
      label: 'Projects',
      icon: Braces,
      href: '/projects',
    },
    {
      label: 'Blog',
      icon: Rss,
      href: '/blog',
    },
  ],
};
