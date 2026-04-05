import React from 'react';
import Logo from './Logo';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
} from '../ui/menubar';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const CustomChatHeader = () => {
  return (
    <header className="bg-primary text-white shadow-accent py-2 px-6 w-full flex items-center justify-between gap-4">
      <Logo />
      <Menubar className="px-5 py-4 flex gap-4 md:gap-8 border-none font-semibold text-xl">
        <MenubarMenu>
          <Link className="font-semibold text-xl" href="/">
            Home
          </Link>
          <Link className="font-semibold text-xl" href="/about">
            About
          </Link>
          <Link className="font-semibold text-xl" href="/file">
            File
          </Link>
        </MenubarMenu>
      </Menubar>
      <ThemeToggle />
    </header>
  );
};

export default CustomChatHeader;
