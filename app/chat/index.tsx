import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAuthForm from './components/user-auth-form';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.formSubtitle}>
        Enter your email below to create your account
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    // ... styles for image container
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  loginButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
  loginButtonText: {
    color: '#000',
  },
  leftPanel: {
    // ... styles for left panel
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quoteContainer: {
    marginTop: 'auto',
  },
  quoteText: {
    fontSize: 16,
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 14,
  },
  formContainer: {
    // ... styles for form container
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginTop: 16,
  },
});

export default ChatScreen;
