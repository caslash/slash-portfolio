export type SocialsConfig = typeof socialsConfig;

type SocialItem = {
  name: string;
  icon: string;
  href: string;
};

export const socialsConfig: { socials: SocialItem[] } = {
  socials: [
    {
      name: 'Github',
      icon: '/github',
      href: 'https://github.com/caslash',
    },
    {
      name: 'Bluesky',
      icon: '/bluesky',
      href: 'https://bsky.app/profile/sashringing.caslash.dev',
    },
    {
      name: 'LinkedIn',
      icon: '/linkedin',
      href: 'https://github.com/caslash',
    },
  ],
};
