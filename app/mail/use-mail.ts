import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Mail, mails } from './data'; // Update the import path as needed

type Config = {
  selected: Mail['id'] | null;
};

const initialConfig: Config = {
  selected: mails[0].id,
};

export function useMail() {
  const [config, setConfig] = useState<Config>(initialConfig);

  useEffect(() => {
    // Load config from AsyncStorage when component mounts
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const storedConfig = await AsyncStorage.getItem('mailConfig');
      if (storedConfig) {
        setConfig(JSON.parse(storedConfig));
      }
    } catch (error) {
      console.error('Error loading mail config:', error);
    }
  };

  const updateConfig = async (newConfig: Config) => {
    try {
      await AsyncStorage.setItem('mailConfig', JSON.stringify(newConfig));
      setConfig(newConfig);
    } catch (error) {
      console.error('Error saving mail config:', error);
    }
  };

  return [config, updateConfig] as const;
}
