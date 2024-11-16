import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native';

// Simple Avatar component
const Avatar = ({ name }: { name: string }) => (
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>{name[0]}</Text>
  </View>
);

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

// Simple Separator component
const Separator = () => <View style={styles.separator} />;

// Simple Tooltip component (placeholder)
const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => (
  <View>
    {children}
    {/* Implement tooltip logic here */}
  </View>
);

// Simple Calendar component (placeholder)
const Calendar = () => (
  <View>
    <Text>Calendar Placeholder</Text>
  </View>
);

// Helper function to format date
const formatDate = (date: Date) => {
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

// Helper function to add hours to a date
const addHours = (date: Date, hours: number) => {
  const newDate = new Date(date);
  newDate.setHours(date.getHours() + hours);
  return newDate;
};

// Helper function to add days to a date
const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

// Helper function to get next Saturday
const nextSaturday = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + ((6 - date.getDay() + 7) % 7));
  return newDate;
};

// Define Mail type
interface Mail {
  name: string;
  subject: string;
  email: string;
  date: string;
  text: string;
}

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const today = new Date();

  const renderToolbarButton = (icon: string, label: string, onPress: () => void) => (
    <Tooltip content={label}>
      <TouchableOpacity style={styles.toolbarButton} onPress={onPress} disabled={!mail}>
        <Icon name={icon} size={16} color="#000" />
      </TouchableOpacity>
    </Tooltip>
  );

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <View style={styles.toolbarGroup}>
          {renderToolbarButton('archive', 'Archive', () => {})}
          {renderToolbarButton('x-square', 'Move to junk', () => {})}
          {renderToolbarButton('trash-2', 'Move to trash', () => {})}
          <Separator />
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={() => setIsPopoverVisible(true)}
            disabled={!mail}
          >
            <Icon name="clock" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.toolbarGroup}>
          {renderToolbarButton('reply', 'Reply', () => {})}
          {renderToolbarButton('reply-all', 'Reply all', () => {})}
          {renderToolbarButton('corner-up-right', 'Forward', () => {})}
        </View>
        <Separator />
        <TouchableOpacity style={styles.toolbarButton} disabled={!mail}>
          <Icon name="more-vertical" size={16} color="#000" />
        </TouchableOpacity>
      </View>
      <Separator />
      {mail ? (
        <ScrollView style={styles.mailContent}>
          <View style={styles.mailHeader}>
            <View style={styles.mailSender}>
              <Avatar name={mail.name} />
              <View style={styles.mailSenderInfo}>
                <Text style={styles.mailSenderName}>{mail.name}</Text>
                <Text style={styles.mailSubject}>{mail.subject}</Text>
                <Text style={styles.mailReplyTo}>
                  <Text style={styles.mailReplyToLabel}>Reply-To:</Text> {mail.email}
                </Text>
              </View>
            </View>
            {mail.date && (
              <Text style={styles.mailDate}>
                {formatDate(new Date(mail.date))}
              </Text>
            )}
          </View>
          <Separator />
          <Text style={styles.mailBody}>{mail.text}</Text>
          <Separator />
          <View style={styles.replyForm}>
            <TextInput
              style={styles.replyInput}
              multiline
              placeholder={`Reply ${mail.name}...`}
            />
            <View style={styles.replyFormFooter}>
              <View style={styles.muteThreadContainer}>
                <Switch />
                <Text style={styles.muteThreadLabel}>Mute this thread</Text>
              </View>
              <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.noMailSelected}>
          <Text>No message selected</Text>
        </View>
      )}
      <Modal
        visible={isPopoverVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsPopoverVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Snooze until</Text>
            <TouchableOpacity style={styles.snoozeOption}>
              <Text>Later today</Text>
              <Text style={styles.snoozeTime}>
                {formatDate(addHours(today, 4))}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.snoozeOption}>
              <Text>Tomorrow</Text>
              <Text style={styles.snoozeTime}>
                {formatDate(addDays(today, 1))}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.snoozeOption}>
              <Text>This weekend</Text>
              <Text style={styles.snoozeTime}>
                {formatDate(nextSaturday(today))}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.snoozeOption}>
              <Text>Next week</Text>
              <Text style={styles.snoozeTime}>
                {formatDate(addDays(today, 7))}
              </Text>
            </TouchableOpacity>
            <Calendar />
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  toolbarGroup: {
    flexDirection: 'row',
  },
  toolbarButton: {
    padding: 8,
  },
  mailContent: {
    flex: 1,
  },
  mailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  mailSender: {
    flexDirection: 'row',
  },
  mailSenderInfo: {
    marginLeft: 16,
  },
  mailSenderName: {
    fontWeight: 'bold',
  },
  mailSubject: {
    fontSize: 12,
  },
  mailReplyTo: {
    fontSize: 12,
  },
  mailReplyToLabel: {
    fontWeight: 'bold',
  },
  mailDate: {
    fontSize: 12,
    color: '#666',
  },
  mailBody: {
    padding: 16,
    fontSize: 14,
  },
  replyForm: {
    padding: 16,
  },
  replyInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    minHeight: 100,
  },
  replyFormFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  muteThreadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  muteThreadLabel: {
    marginLeft: 8,
    fontSize: 12,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 4,
  },
  sendButtonText: {
    color: '#fff',
  },
  noMailSelected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  snoozeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  snoozeTime: {
    color: '#666',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});
