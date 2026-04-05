'use client';

import CustomChatHeader from '@/components/custom/SidebarHeader';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
} from '@/components/ui/sidebar';

export default function Page() {
  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>

      <SidebarInset>
        <CustomChatHeader />
        <p>Post</p>
      </SidebarInset>
    </>
  );
}
