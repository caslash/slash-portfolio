'use client';

import { siteConfig } from '@/config/site';
import { socialsConfig } from '@/config/socials';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Dock, DockIcon } from '../magicui/dock';
import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import ThemeSwitcher from './themeswitcher';

export default function PortfolioDock({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={`${className}`}>
      <TooltipProvider>
        <Dock>
          {socialsConfig.socials.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
                  >
                    <item.icon />
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          {siteConfig.navItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
                  >
                    <item.icon />
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <ThemeSwitcher />
        </Dock>
      </TooltipProvider>
    </div>
  );
}
