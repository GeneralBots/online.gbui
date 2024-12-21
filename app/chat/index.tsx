import React from 'react';
import { ChatProvider } from './providers/chat-provider';
import { ChatLayout } from './components/chat-layout';
import { SoundInitializer } from './components/sound-initializer';
import { SoundProvider } from './providers/sound-provider';

export function Chat() {
  return (
    <SoundInitializer>
      <SoundProvider>
    <ChatProvider>
      <ChatLayout />
    </ChatProvider>
    </SoundProvider>
    </SoundInitializer>
  );
}
