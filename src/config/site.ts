export type SiteConfig = typeof siteConfig;

type NavItem = {
  label: string;
  href: string;
};

export const siteConfig: { name: string; description: string; navItems: NavItem[] } = {
  name: 'Portfolio',
  description: "Cameron Slash's portfolio",
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ],
};
