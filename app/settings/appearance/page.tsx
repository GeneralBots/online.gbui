import React from 'react';
import { View, Text } from 'react-native';
import { AppearanceForm } from './appearance-form';

export default function SettingsAppearancePage() {
  return (
    <View style={{ gap: 24 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Appearance</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#ccc' }} />
      <AppearanceForm />
    </View>
  );
}
