import { IconSvgProps } from '@/components/icons/iconsvgprops';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/socials';

export type SocialsConfig = typeof socialsConfig;

type SocialItem = {
  name: string;
  icon: (props?: IconSvgProps) => JSX.Element;
  href: string;
};

export const socialsConfig: { socials: SocialItem[] } = {
  socials: [
    {
      name: 'Github',
      icon: GitHubIcon,
      href: 'https://github.com/caslash',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/cameron-slash',
    },
  ],
};
