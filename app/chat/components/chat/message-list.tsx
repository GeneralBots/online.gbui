import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useChat } from '../../providers/chat-provider';
import { useSound } from '../../providers/sound-provider';
import { Message } from '../../types';
import { chatStyles } from '../../styles/chat.styles';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { user } = useChat();
  const { playSound } = useSound();
  const prevMessagesLength = React.useRef(messages.length);

  React.useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.from.id !== user.id) {
        playSound('receive');
      }
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={chatStyles.messageList}
      contentContainerStyle={chatStyles.messageListContent}
    >
      {messages.map((message, index) => (
        <View
          key={`${message.id}-${index}`}
          style={[
            chatStyles.messageContainer,
            message.from.id === user.id 
              ? chatStyles.userMessage 
              : chatStyles.botMessage
          ]}
        >
          <Text style={chatStyles.messageText}>{message.text}</Text>
          <Text style={chatStyles.messageTime}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
