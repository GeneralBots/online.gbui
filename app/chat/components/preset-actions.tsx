import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function PresetActions() {
  const [open, setIsOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <Text>Actions</Text>
      </TouchableOpacity>
    </View>
  );
}
