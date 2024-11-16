import React from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { accounts, mails } from './data';
import { Mail } from './components/mail';

const MailPage = () => {
  const [defaultLayout, setDefaultLayout] = React.useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = React.useState(undefined);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    const loadStorageData = async () => {
      try {
        const layoutData = await AsyncStorage.getItem('react-resizable-panels:layout:mail');
        const collapsedData = await AsyncStorage.getItem('react-resizable-panels:collapsed');
        
        setDefaultLayout(layoutData ? JSON.parse(layoutData) : undefined);
        setDefaultCollapsed(collapsedData ? JSON.parse(collapsedData) : undefined);
      } catch (error) {
        console.error('Error loading storage data:', error);
      }
    };

    loadStorageData();
  }, []);

  return (
    <View style={styles.container}>
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default MailPage;
