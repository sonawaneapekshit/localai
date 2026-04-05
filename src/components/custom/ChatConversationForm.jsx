'use client';

import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Sent02FreeIcons } from '@hugeicons/core-free-icons';

const ChatConversationForm = () => {
  return (
    <form className='w-full'>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="input-demo-api-key" className="hidden">
          Enter Your Message to Local Chat with AI
        </FieldLabel>
        <Input
          id="input-demo-api-key"
          type="text"
          placeholder="Message Local AI..."
          className="min-w-[90% - 64px] min-h-16"
        />
        <Button className="min-w-16 min-h-16">
          <HugeiconsIcon icon={Sent02FreeIcons} size={24} />
        </Button>
      </Field>
    </form>
  );
};

export default ChatConversationForm;
