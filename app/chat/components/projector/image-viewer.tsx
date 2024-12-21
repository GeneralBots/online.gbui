import React from 'react';
import { View, Image } from 'react-native';
import { projectorStyles } from '../../styles/projector.styles';

interface ImageViewerProps {
  url: string;
}

export function ImageViewer({ url }: ImageViewerProps) {
  return (
    <View style={projectorStyles.imageContainer}>
      <Image
        source={{ uri: url }}
        style={projectorStyles.image}
        resizeMode="contain"
      />
    </View>
  );
}
