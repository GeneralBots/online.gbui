import { StyleSheet } from 'react-native';

export const emojiStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    margin: 20,
    marginTop: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00f3ff',
    shadowColor: '#00f3ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#00f3ff33',
  },
  title: {
    color: '#00f3ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  category: {
    marginBottom: 24,
  },
  categoryTitle: {
    color: '#bf00ff',
    fontSize: 16,
    marginBottom: 12,
  },
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emojiButton: {
    width: '12.5%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  emoji: {
    fontSize: 24,
  },
});

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#00f3ff33',
  },
  title: {
    color: '#00f3ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#bf00ff',
    fontSize: 16,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  effectPreview: {
    padding: 20,
  },
  previewTitle: {
    color: '#00f3ff',
    fontSize: 16,
    marginBottom: 12,
  },
  previewContent: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f3ff33',
  },
  previewText: {
    color: '#00f3ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

// Add animation helpers
export const pulseAnimation = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 0.7,
    scale: 1.05,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

export const neonGlow = {
  shadowColor: '#00f3ff',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 15,
};
