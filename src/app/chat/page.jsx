'use client';

import Logo from '@/components/custom/Logo';
import CustomChatHeader from '@/components/custom/CustomChatHeader';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
} from '@/components/ui/sidebar';
import ChatUserDetailsCard from '@/components/custom/ChatUserDetailsCard';
import ChatConversationForm from '@/components/custom/ChatConversationForm';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <>
      <Sidebar className="bg-accent-foreground min-h-screen border-1 rounded-md border-accent">
        <Card className="min-h-dvh pb-0 rounded-none">
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
          <SidebarFooter className="px-0 pb-0 bg-muted">
            <ChatUserDetailsCard />
          </SidebarFooter>
        </Card>
      </Sidebar>
      <SidebarInset className="px-6 border-l-0 min-h-screen">
        <section className="flex flex-col gap-4 p-0 rounded-none border-0">
          <CustomChatHeader />
          <Card className="bg-muted min-h-[80vh]">
            <CardContent>

            </CardContent>
            <CardFooter className="mt-auto">
              <ChatConversationForm />
            </CardFooter>
          </Card>
        </section>
      </SidebarInset>
    </>
  );
}
