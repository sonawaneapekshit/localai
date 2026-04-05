'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import {
  Setting06FreeIcons,
  User03FreeIcons,
} from '@hugeicons/core-free-icons';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

const ChatUserDetailsCard = () => {
  return (
    <Card className="w-full p-3 rounded-none border-l-0 border-r-0 border-b-0 bg-transparent">
      <CardContent className="flex items-center gap-3 p-0">
        <HugeiconsIcon icon={User03FreeIcons} size={32} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <h2 className="text-accent-foreground text-sm font-medium">User anon</h2>
          <p className="text-muted-foreground text-xs">Lifetime free plan</p>
        </div>
        <Link href="/settings" className="shrink-0 text-muted-foreground hover:text-foreground">
          <HugeiconsIcon icon={Setting06FreeIcons} size={18} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChatUserDetailsCard;
