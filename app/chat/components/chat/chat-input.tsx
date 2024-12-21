import React from 'react';
import { View, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Send, Paperclip, Mic, Smile } from 'lucide-react-native';
import { EmojiPicker } from '../ui/emoji-picker';
import { useChat } from '../../providers/chat-provider';
import { useSound } from '../../providers/sound-provider';
import { chatStyles } from '../../styles/chat.styles';

export function ChatInput() {
  const [message, setMessage] = React.useState('');
  const [showEmoji, setShowEmoji] = React.useState(false);
  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  const { sendActivity } = useChat();
  const { playSound } = useSound();
  const typingTimeout = React.useRef<NodeJS.Timeout>();

  const handleKeyPress = () => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(() => {
      playSound('typing');
    }, 100);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    playSound('send');
    sendActivity({
      type: 'message',
      text: message.trim(),
    });
    setMessage('');
  };

  const handleEmojiSelect = (emoji: string) => {
    playSound('click');
    setMessage(prev => prev + emoji);
  };

  return (
    <>
      <View style={chatStyles.inputContainer}>
        <TouchableOpacity 
          style={chatStyles.iconButton}
          onPress={() => playSound('click')}
        >
          <Paperclip color="#00f3ff" size={24} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={chatStyles.iconButton}
          onPress={() => {
            playSound('click');
            setShowEmoji(true);
          }}
        >
          <Smile color="#00f3ff" size={24} />
        </TouchableOpacity>
        
        <TextInput
          value={message}
          onChangeText={setMessage}
          onKeyPress={handleKeyPress}
          style={[
            chatStyles.input,
            { borderColor: message ? '#00f3ff' : '#333' }
          ]}
          placeholder="Type a message..."
          placeholderTextColor="#666"
          multiline
        />
        
        {message.trim().length > 0 ? (
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <TouchableOpacity 
              style={[chatStyles.iconButton, chatStyles.sendButton]}
              onPress={handleSend}
            >
              <Send color="#00f3ff" size={24} />
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity 
            style={chatStyles.iconButton}
            onPress={() => playSound('click')}
          >
            <Mic color="#00f3ff" size={24} />
          </TouchableOpacity>
        )}
      </View>

      <EmojiPicker
        visible={showEmoji}
        onClose={() => {
          playSound('click');
          setShowEmoji(false);
        }}
        onEmojiSelect={handleEmojiSelect}
      />
    </>
  );
}
