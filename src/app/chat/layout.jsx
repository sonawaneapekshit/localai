'use client';

import { SidebarProvider } from '@/components/ui/sidebar';

export default function ChatLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '20rem',
        '--sidebar-width-mobile': '20rem',
      }}
    >
      {children}
    </SidebarProvider>
  );
}
