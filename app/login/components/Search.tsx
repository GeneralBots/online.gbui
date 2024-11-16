import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export function Search() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search..."
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputInnerContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
