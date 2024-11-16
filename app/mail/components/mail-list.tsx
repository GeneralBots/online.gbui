import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import { Mail } from "../data";
import { useMail } from "../use-mail";

interface MailListProps {
  items: Mail[];
}

export function MailList({ items }: MailListProps) {
  const [mail, setMail] = useMail();

  const formatDistanceToNow = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  };

  const renderItem = ({ item }: { item: Mail }) => (
    <TouchableOpacity
      style={[
        styles.mailItem,
        mail.selected === item.id && styles.selectedMailItem,
      ]}
      onPress={() =>
        setMail({
          ...mail,
          selected: item.id,
        })
      }
    >
      <View style={styles.mailHeader}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          {!item.read && <View style={styles.unreadDot} />}
        </View>
        <Text
          style={[
            styles.date,
            mail.selected === item.id ? styles.selectedDate : styles.mutedDate,
          ]}
        >
          {formatDistanceToNow(new Date(item.date))}
        </Text>
      </View>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.preview} numberOfLines={2}>
        {item.text.substring(0, 300)}
      </Text>
      {item.labels.length > 0 && (
        <View style={styles.labelContainer}>
          {item.labels.map((label) => (
            <View key={label} style={styles.label}>
              <Text style={styles.labelText}>{label}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  mailItem: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  selectedMailItem: {
    backgroundColor: '#f0f0f0',
  },
  mailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
  date: {
    fontSize: 12,
  },
  selectedDate: {
    color: '#000',
  },
  mutedDate: {
    color: '#666',
  },
  subject: {
    fontWeight: '500',
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    marginBottom: 4,
  },
  labelText: {
    fontSize: 12,
  },
});
