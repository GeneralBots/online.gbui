import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface SidebarNavProps {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.href}
          onPress={() => navigation.navigate(item.href)}
          style={{
            padding: 8,
            backgroundColor: route.name === item.href ? '#f0f0f0' : 'transparent',
            borderRadius: 4,
          }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
