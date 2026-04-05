'use client';

import { useTheme } from 'next-themes';
import { HugeiconsIcon } from '@hugeicons/react';
import { SunIcon, Moon01Icon } from '@hugeicons/core-free-icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2"
    >
      {theme === 'dark' ? (
        <HugeiconsIcon icon={Moon01Icon} size={24} />
      ) : (
        <HugeiconsIcon icon={SunIcon} size={24} />
      )}
    </button>
  );
}
