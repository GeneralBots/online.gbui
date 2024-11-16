import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface TemperatureSelectorProps {
  defaultValue: number[];
}

export function TemperatureSelector({ defaultValue }: TemperatureSelectorProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <View>
      <Text>Temperature</Text>
      <Slider
        value={value[0]}
        onValueChange={(newValue) => setValue([newValue])}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
      />
      <Text>{value[0]}</Text>
    </View>
  );
}
