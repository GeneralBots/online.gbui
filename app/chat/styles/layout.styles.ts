import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  sidebar: {
    width: 300,
    borderRightWidth: 1,
    borderRightColor: '#1a1a1a',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  projector: {
    width: '40%',
    borderRightWidth: 1,
    borderRightColor: '#1a1a1a',
  },
  chatArea: {
    flex: 1,
  },
});
