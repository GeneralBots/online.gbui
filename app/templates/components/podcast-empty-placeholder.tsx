import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function PodcastEmptyPlaceholder() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>No episodes added</Text>
        <Text style={styles.description}>You have not added any podcasts. Add one below.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Podcast</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
