// import { GitHubIcon, LinkedInIcon } from '@/components/icons/socials';
import { Github, Linkedin, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type SocialsConfig = typeof socialsConfig;

type SocialItem = {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  href: string;
};

export const socialsConfig: { socials: SocialItem[] } = {
  socials: [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/caslash',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/cameron-slash',
    },
  ],
};
