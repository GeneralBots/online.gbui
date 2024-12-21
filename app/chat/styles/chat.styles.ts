import { StyleSheet } from 'react-native';

export const chatStyles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#111111',
  },
  messageList: {
    flex: 1,
    padding: 16,
  },
  messageListContent: {
    paddingBottom: 16,
  },
  messageContainer: {
    maxWidth: '70%',
    marginVertical: 4,
    padding: 12,
    borderRadius: 12,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#00f3ff22',
    borderColor: '#00f3ff',
    borderWidth: 1,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#bf00ff22',
    borderColor: '#bf00ff',
    borderWidth: 1,
  },
  messageText: {
    color: '#ffffff',
    fontSize: 16,
  },
  messageTime: {
    color: '#666666',
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    padding: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    color: '#ffffff',
    maxHeight: 100,
  },
  iconButton: {
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#00f3ff',
    fontSize: 14,
    marginTop: 2,
  },
  headerButton: {
    padding: 8,
  },
  sendButton: {
    backgroundColor: '#00f3ff22',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#00f3ff',
  }
});