import React, { useState } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import { ChatInstance, User } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface ChatContextType {
  line: DirectLine | null;
  user: User;
  instance: ChatInstance | null;
  sendActivity: (activity: any) => void;
  selectedVoice: any;
  setVoice: (voice: any) => void;
}

const generateUserId = () => {
  return 'usergb@gb';
};

export const ChatContext = React.createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [line, setLine] = React.useState<DirectLine | null>(null);
  const [instance, setInstance] = React.useState<ChatInstance | null>(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [user] = React.useState<User>(() => ({
    id: `user_${Math.random().toString(36).slice(2)}`,
    name: 'You'
  }));
  
  React.useEffect(() => {
    initializeChat();
  }, []);

  const initializeChat = async () => {
    try {
      var botId = window.location.href.split('/')[3];
      if (botId.indexOf('#') !== -1) {
        botId = botId.split('#')[0];
      }
  
      if (!botId || botId === '') {
        botId = '[default]';
      }     
  
      const response = await fetch(
         'http://localhost:4242/instances/' + botId,
      )
      const data = await response.json();
      const userId = generateUserId();
      
      const directLine = data.webchatToken
        ? new DirectLine({
            token: data.token,
            webSocket: true
          })
        : new DirectLine({
            domain: data.domain,
            secret: null,
            token: null,
            webSocket: false
          });
      directLine.setUserId(userId);
      setLine(directLine);
      setInstance(data.instance);
      console.info (`DirectLine for user:` + userId);
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }
  };

  const sendActivity = (activity: any) => {
    line?.postActivity({
      ...activity,
      from: user,
      timestamp: new Date().toISOString()
    }).subscribe();
  };

  const setVoice = (voice: any) => {
    setSelectedVoice(voice);
  };

  const contextValue: ChatContextType = {
    line,
    user,
    instance,
    sendActivity,
    selectedVoice,
    setVoice
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
}
