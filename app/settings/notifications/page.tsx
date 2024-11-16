import React from 'react';
import { View, Text } from 'react-native';
import { NotificationsForm } from './notifications-form';

export default function SettingsNotificationsPage() {
  return (
    <View style={{ gap: 24 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Notifications</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Configure how you receive notifications.
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <NotificationsForm />
    </View>
  );
}
