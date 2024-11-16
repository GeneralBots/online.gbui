import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PresetSelector } from './components/preset-selector';
import { PresetSave } from './components/preset-save';
import { CodeViewer } from './components/code-viewer';
import { PresetShare } from './components/preset-share';
import { PresetActions } from './components/preset-actions';
import { ModelSelector } from './components/model-selector';
import { TemperatureSelector } from './components/temperature-selector';
import { MaxLengthSelector } from './components/maxlength-selector';
import { TopPSelector } from './components/top-p-selector';
import { models, types } from './data/models';
import { presets } from './data/presets';

export default function ChatPage() {
  return (
    <ScrollView>
      <View>
        <Text>Playground</Text>
        <PresetSelector presets={presets} />
        <PresetSave />
        <CodeViewer />
        <PresetShare />
        <PresetActions />
        <ModelSelector types={types} models={models} />
        <TemperatureSelector defaultValue={[0.56]} />
        <MaxLengthSelector defaultValue={[256]} />
        <TopPSelector defaultValue={[0.9]} />
      </View>
    </ScrollView>
  );
}
