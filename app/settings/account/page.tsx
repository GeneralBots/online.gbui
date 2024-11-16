import React from 'react';
import { View, Text } from 'react-native';
import { AccountForm } from './account-form';

export default function SettingsAccountPage() {
  return (
    <View style={{ gap: 24 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Account</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Update your account settings. Set your preferred language and
          timezone.
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <AccountForm />
    </View>
  );
}
