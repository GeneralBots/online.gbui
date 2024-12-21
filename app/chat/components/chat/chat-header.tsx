import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MoreVertical } from 'lucide-react-native';
import { useChat } from '../../providers/chat-provider';
import { chatStyles } from '../../styles/chat.styles';

export function ChatHeader() {
  const { instance } = useChat();

  return (
    <View style={chatStyles.header}>
      <View style={chatStyles.headerContent}>
        <Text style={chatStyles.headerTitle}>
          {instance?.name || 'Chat'}
        </Text>
        <Text style={chatStyles.headerSubtitle}>
          Online
        </Text>
      </View>
      
      <TouchableOpacity style={chatStyles.headerButton}>
        <MoreVertical color="#00f3ff" size={24} />
      </TouchableOpacity>
    </View>
  );
}
