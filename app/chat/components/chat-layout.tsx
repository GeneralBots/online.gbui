import React from 'react';
import { View, Platform } from 'react-native';
import { PersonSelector } from './selector/person-selector';
import { ProjectorView } from './projector/projector-view';
import { ChatWindow } from './chat/chat-window';
import { layoutStyles } from '../styles/layout.styles';

export function ChatLayout() {
  return (
    <View style={[
      layoutStyles.container,
      Platform.OS === 'web' && { height: '100vh' }
    ]}>
      <View style={layoutStyles.sidebar}>
        <PersonSelector />
      </View>
      <View style={layoutStyles.mainContent}>
        <View style={layoutStyles.projector}>
          <ProjectorView />
        </View>
        <View style={layoutStyles.chatArea}>
          <ChatWindow />
        </View>
      </View>
    </View>
  );
}
