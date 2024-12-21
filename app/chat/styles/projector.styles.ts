import { StyleSheet } from 'react-native';

export const projectorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 16,
  },
  videoContainer: {
    aspectRatio: 16/9,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
  },
  markdownContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  markdown: {},
    body: {
      color: '#ffffff',
      fontSize: 16,
    },
    heading1: {
      color: '#00f3ff',
      fontSize: 24,
      marginBottom: 16,
    },
    heading2: {
      color: '#00f3ff',
      fontSize: 20,
      marginBottom: 12,
    },
    link: {
      color: '#bf00ff',
    },
    code_block: {
      backgroundColor: '#1a1a1a',
      padding: 12,
      borderRadius: 4,
    }
  
});