import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Overlay } from 'react-native-elements';

export function UserNav() {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleOverlay}>
        <Avatar
          rounded
          source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
        />
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View>
          <Text style={styles.overlayText}>shadcn</Text>
          <Text style={styles.overlaySubtext}>m@example.com</Text>
          <TouchableOpacity style={styles.overlayButton}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.overlayButton}>
            <Text>Billing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.overlayButton}>
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.overlayButton}>
            <Text>New Team</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.overlayButton}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlaySubtext: {
    fontSize: 14,
    color: 'gray',
  },
  overlayButton: {
    paddingVertical: 10,
  },
});
