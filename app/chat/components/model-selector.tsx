import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Model, ModelType } from '../data/models';

interface ModelSelectorProps {
  types: readonly ModelType[];
  models: Model[];
}

export function ModelSelector({ models, types }: ModelSelectorProps) {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);

  return (
    <View>
      <Text>Model</Text>
      <Picker
        selectedValue={selectedModel.id}
        onValueChange={(itemValue) => {
          const model = models.find((m) => m.id === itemValue);
          if (model) setSelectedModel(model);
        }}
      >
        {models.map((model) => (
          <Picker.Item key={model.id} label={model.name} value={model.id} />
        ))}
      </Picker>
    </View>
  );
}
