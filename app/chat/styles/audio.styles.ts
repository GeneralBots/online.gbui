import { StyleSheet } from 'react-native';

export const audioStyles = StyleSheet.create({
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  volumeButton: {
    padding: 8,
  },
  sliderContainer: {
    flex: 1,
    marginLeft: 16,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  visualizerContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  visualizerBar: {
    width: 3,
    height: 20,
    backgroundColor: '#00f3ff',
    borderRadius: 2,
    marginHorizontal: 1,
  },
  modal: {
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
  voiceList: {
    flex: 1,
    padding: 16,
  },
  voiceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedVoice: {
    borderColor: '#00f3ff',
    backgroundColor: '#00f3ff11',
  },
  voiceInfo: {
    flex: 1,
  },
  voiceName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voiceAccent: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    color: '#00f3ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#00f3ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  triggerText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 14,
  },
});

export const voiceStyles = StyleSheet.create({
  // ... copy from audioStyles the modal-related styles ...
  // Add voice-specific styles here
});
