'use client';

import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      aria-label='Toggle theme'
      className='mr-4'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <RiSunFill
        className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        size={25}
      />
      <RiMoonFill
        className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        size={25}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
