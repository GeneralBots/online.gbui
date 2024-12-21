import React from 'react';
import { View, Image } from 'react-native';
import { projectorStyles } from '../../styles/projector.styles';

interface ImageViewerProps {
  url: string;
}

export function VideoViewer({ url }: ImageViewerProps) {
  return (
    <View style={projectorStyles.imageContainer}>
      <iframe
        src={url}
        
        
      />
    </View>
  );
}
