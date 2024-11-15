import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAuthForm from './components/user-auth-form';

const AuthenticationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
        </View>

        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.leftPanel}>
            <View style={styles.logoContainer}>
              {/* Replace with your logo component */}
              <Text style={styles.logoText}>Acme Inc</Text>
            </View>
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>
                "This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before."
              </Text>
              <Text style={styles.quoteAuthor}>Sofia Davis</Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Create an account</Text>
              <Text style={styles.formSubtitle}>
                Enter your email below to create your account
              </Text>
            </View>
          
            <Text style={styles.termsText}>
              By clicking continue, you agree to our Terms of Service and Privacy Policy.
            </Text>
          </View>
        </View>
      </ScrollView>
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

export default AuthenticationScreen;
