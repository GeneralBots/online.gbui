import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

interface UserAuthFormProps {
  // Add any props you need
}

export function UserAuthForm({ }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  async function onSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
              placeholder="name@example.com"
            keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            autoCorrect={false}
            editable={!isLoading}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
          disabled={isLoading}
        >
          {isLoading && <ActivityIndicator style={styles.spinner} color="#ffffff" />}
          <Text style={styles.buttonText}>Sign In with Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or continue with</Text>
        <View style={styles.dividerLine} />
      </View>
      <TouchableOpacity
        style={styles.githubButton}
        onPress={() => {/* Add GitHub sign in logic */}}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} color="#000000" />
        ) : (
          <Text>GitHub Icon</Text> // Replace with actual GitHub icon
        )}
        <Text style={styles.githubButtonText}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  form: {
    gap: 10,
  },
  inputContainer: {
    // Add styles for input container
  },
  input: {
    // Add styles for input
  },
  button: {
    // Add styles for button
  },
  buttonText: {
    // Add styles for button text
  },
  spinner: {
    marginRight: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    paddingHorizontal: 10,
    // Add styles for divider text
  },
  githubButton: {
    // Add styles for GitHub button
  },
  githubButtonText: {
    // Add styles for GitHub button text
  },
});
