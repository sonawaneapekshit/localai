'use client';

import { useTheme } from 'next-themes';
import { HugeiconsIcon } from '@hugeicons/react';
import { SunIcon, Moon01Icon } from '@hugeicons/core-free-icons';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2"
    >
      <span className="dark:hidden">
        <HugeiconsIcon icon={SunIcon} size={24} />
      </span>
      <span className="hidden dark:block">
        <HugeiconsIcon icon={Moon01Icon} size={24} />
      </span>
    </button>
  );
}
