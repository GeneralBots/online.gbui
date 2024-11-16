import React from 'react';
import { View, Text } from 'react-native';
import { DisplayForm } from './display-form';

export default function SettingsDisplayPage() {
  return (
    <View style={{ gap: 24 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Display</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Turn items on or off to control what's displayed in the app.
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <DisplayForm />
    </View>
  );
}
