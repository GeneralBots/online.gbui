import React from 'react';
import { ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { projectorStyles } from '../../styles/projector.styles';

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <ScrollView style={projectorStyles.markdownContainer}>
      <Markdown style={projectorStyles.markdown}>
        {content}
      </Markdown>
    </ScrollView>
  );
}
