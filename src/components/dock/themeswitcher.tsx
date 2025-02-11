'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [setMounted]);

  if (!mounted) return null;

  const updateTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={updateTheme} variant="ghost" size="icon">
      {theme == 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
}
