import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface MaxLengthSelectorProps {
  defaultValue: number[];
}

export function MaxLengthSelector({ defaultValue }: MaxLengthSelectorProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <View>
      <Text>Maximum Length</Text>
      <Slider
        value={value[0]}
        onValueChange={(newValue) => setValue([newValue])}
        minimumValue={0}
        maximumValue={4000}
        step={10}
      />
      <Text>{value[0]}</Text>
    </View>
  );
}
