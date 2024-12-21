import React from 'react';
import { View } from 'react-native';
import { MessageList } from './message-list';
import { ChatInput } from './chat-input';
import { ChatHeader } from './chat-header';
import { useChat } from '../../providers/chat-provider';
import { Message } from '../../types';
import { chatStyles } from '../../styles/chat.styles';

export function ChatWindow() {
  const { line } = useChat();
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    if (!line) return;

    const subscription = line.activity$.subscribe(activity => {
      if (activity.type === 'message') {
        setMessages(prev => [...prev, activity as Message]);
      }
    });

    return () => subscription.unsubscribe();
  }, [line]);

  return (
    <View style={chatStyles.window}>
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput />
    </View>
  );
}
