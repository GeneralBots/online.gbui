import React from 'react';
import { View, Text } from 'react-native';
import { ProfileForm } from './profile-form';

export default function SettingsProfilePage() {
  return (
    <View style={{ gap: 24 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Profile</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          This is how others will see you on the site.
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <ProfileForm />
    </View>
  );
}
