import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { X } from 'lucide-react-native';
import { emojiStyles } from '../../styles/ui.styles';

const EMOJI_CATEGORIES = {
  "😀 🎮": ["😀", "😎", "🤖", "👾", "🎮", "✨", "🚀", "💫"],
  "🌟 💫": ["⭐", "🌟", "💫", "✨", "⚡", "💥", "🔥", "🌈"],
  "🤖 🎯": ["🤖", "🎯", "🎲", "🎮", "🕹️", "👾", "💻", "⌨️"]
};

export function EmojiPicker({ visible, onClose, onEmojiSelect }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={emojiStyles.container}>
        <View style={emojiStyles.header}>
          <Text style={emojiStyles.title}>Select Emoji</Text>
          <TouchableOpacity onPress={onClose}>
            <X color="#00f3ff" size={24} />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={emojiStyles.content}>
          {Object.entries(EMOJI_CATEGORIES).map(([category, emojis]) => (
            <View key={category} style={emojiStyles.category}>
              <Text style={emojiStyles.categoryTitle}>{category}</Text>
              <View style={emojiStyles.emojiGrid}>
                {emojis.map(emoji => (
                  <TouchableOpacity
                    key={emoji}
                    style={emojiStyles.emojiButton}
                    onPress={() => {
                      onEmojiSelect(emoji);
                      onClose();
                    }}
                  >
                    <Text style={emojiStyles.emoji}>{emoji}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}
