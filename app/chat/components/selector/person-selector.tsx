import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import { useChat } from '../../providers/chat-provider';
import { selectorStyles } from '../../styles/selector.styles';

export function PersonSelector() {
  const [search, setSearch] = React.useState('');
  const { instance } = useChat();

  return (
    <View style={selectorStyles.container}>
      <View style={selectorStyles.header}>
        <Image 
          source={{ uri: instance?.logo }}
          style={selectorStyles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={selectorStyles.searchContainer}>
        <Search size={20} color="#00f3ff" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search conversations..."
          placeholderTextColor="#666"
          style={selectorStyles.searchInput}
        />
      </View>

      <ScrollView style={selectorStyles.list}>
        {['FAQ', 'Support', 'Sales'].map((item) => (
          <TouchableOpacity 
            key={item}
            style={selectorStyles.item}
          >
            <View style={selectorStyles.avatar}>
              <Text style={selectorStyles.avatarText}>{item[0]}</Text>
            </View>
            <View style={selectorStyles.itemContent}>
              <Text style={selectorStyles.itemTitle}>{item}</Text>
              <Text style={selectorStyles.itemSubtitle}>Start a conversation</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
