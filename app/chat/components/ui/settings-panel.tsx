import React from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Moon, Sun, Volume2, VolumeX, Zap, Settings } from 'lucide-react-native';
import { useSound } from '../../providers/sound-provider';
import { settingsStyles } from '../../styles/ui.styles';

export function SettingsPanel() {
  const [theme, setTheme] = React.useState('dark');
  const [sound, setSound] = React.useState(true);
  const [powerMode, setPowerMode] = React.useState(false);
  const { setEnabled, playSound } = useSound();

  const handleSoundToggle = (value: boolean) => {
    setSound(value);
    setEnabled(value);
    if (value) {
      playSound('success');
    }
  };

  const handleThemeChange = () => {
    playSound('click');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handlePowerMode = (value: boolean) => {
    playSound(value ? 'success' : 'click');
    setPowerMode(value);
  };

  return (
    // ... rest of the settings panel code ...
    <View style={settingsStyles.option}>
      {sound ? (
        <Volume2 color="#00f3ff" size={20} />
      ) : (
        <VolumeX color="#666" size={20} />
      )}
      <Text style={settingsStyles.optionText}>Sound Effects</Text>
      <Switch
        value={sound}
        onValueChange={handleSoundToggle}
        trackColor={{ false: '#333', true: '#00f3ff44' }}
        thumbColor={sound ? '#00f3ff' : '#666'}
      />
    </View>
    // ... rest of the settings panel code ...
  );
}
