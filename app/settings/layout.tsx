import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SidebarNav } from './components/sidebar-nav';

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/setttings",
  },
  {
    title: "Account",
    href: "/setttings/account",
  },
  {
    title: "Appearance",
    href: "/setttings/appearance",
  },
  {
    title: "Notifications",
    href: "/setttings/notifications",
  },
  {
    title: "Display",
    href: "/setttings/display",
  },
];

export default function SettingsLayout({ children }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Settings</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            Manage your account settings and set e-mail preferences.
          </Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 24 }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '25%', marginRight: 16 }}>
            <SidebarNav items={sidebarNavItems} />
          </View>
          <View style={{ flex: 1 }}>{children}</View>
        </View>
      </View>
    </ScrollView>
  );
}
