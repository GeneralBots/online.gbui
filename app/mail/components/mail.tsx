import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AccountSwitcher } from './account-switcher';
import { MailDisplay } from './mail-display';
import { MailList } from './mail-list';
import { Nav } from './nav';
import { useMail } from '../use-mail';

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
}

export function Mail({ accounts, mails }: MailProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mail] = useMail();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <View style={styles.container}>
      <View style={[styles.sidebar, isCollapsed && styles.collapsedSidebar]}>
        <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
          <Ionicons name={isCollapsed ? 'menu' : 'menu-outline'} size={24} color="black" />
        </TouchableOpacity>
        {!isCollapsed && (
          <>
            
          </>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Inbox</Text>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'all' && styles.activeTab]}
              onPress={() => setActiveTab('all')}
            >
              <Text>All mail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'unread' && styles.activeTab]}
              onPress={() => setActiveTab('unread')}
            >
              <Text>Unread</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
        <ScrollView>
          <MailList
            items={activeTab === 'all' ? mails : mails.filter((item) => !item.read)}
          />
        </ScrollView>
      </View>
      <View style={styles.mailDisplay}>
        <MailDisplay
          mail={mails.find((item) => item.id === mail.selected) || null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#f0f0f0',
  },
  collapsedSidebar: {
    width: 50,
  },
  collapseButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  mailDisplay: {
    width: '40%',
    borderLeftWidth: 1,
    borderLeftColor: '#e0e0e0',
  },
});
