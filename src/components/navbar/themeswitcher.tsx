'use client';

import { Button } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../icons/themes';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [setMounted]);

  if (!mounted) return null;

  const updateTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onPress={updateTheme} variant="light" radius="lg" isIconOnly>
      {theme == 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
