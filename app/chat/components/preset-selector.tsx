import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Preset } from '../data/presets';

interface PresetSelectorProps {
  presets: Preset[];
}

export function PresetSelector({ presets }: PresetSelectorProps) {
  const [selectedPreset, setSelectedPreset] = useState<Preset | undefined>();

  return (
    <View>
      <Picker
        selectedValue={selectedPreset?.id}
        onValueChange={(itemValue) => {
          const preset = presets.find((p) => p.id === itemValue);
          setSelectedPreset(preset);
        }}
      >
        <Picker.Item label="Load a preset..." value={undefined} />
        {presets.map((preset) => (
          <Picker.Item key={preset.id} label={preset.name} value={preset.id} />
        ))}
      </Picker>
    </View>
  );
}
