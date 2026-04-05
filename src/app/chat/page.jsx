'use client';

import Logo from '@/components/custom/Logo';
import CustomChatHeader from '@/components/custom/SidebarHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
      <Sidebar className="bg-accent-foreground border-1 rounded-md border-accent">
        <Card className="min-h-dvh">
          <SidebarHeader className="flex justify-center gap-8 px-4">
            <Logo classes="max-w-64 mx-auto" height="59" width="200" />
            <Button className="bg-primary text-foreground rounded-sm py-6 px-4 text-md md:text-lg">
              New Chat
            </Button>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter>
            
          </SidebarFooter>
        </Card>
      </Sidebar>
      <SidebarInset>
        <Card>
          <CustomChatHeader />
          <p>Post</p>
        </Card>
      </SidebarInset>
    </>
  );
}
