import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

const groups = [
  {
    label: "Personal Account",
    teams: [
      { label: "Alicia Koch", value: "personal" },
    ],
  },
  {
    label: "Teams",
    teams: [
      { label: "Acme Inc.", value: "acme-inc" },
      { label: "Monsters Inc.", value: "monsters" },
    ],
  },
];

export function TeamSwitcher() {
  const [open, setOpen] = useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(groups[0].teams[0]);

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Avatar
          rounded
          source={{ uri: `https://avatar.vercel.sh/${selectedTeam.value}.png` }}
        />
        <Text>{selectedTeam.label}</Text>
      </TouchableOpacity>
      <Modal visible={open} animationType="slide">
        <View style={styles.modal}>
          <Input placeholder="Search team..." />
          {groups.map((group) => (
            <View key={group.label}>
              <Text style={styles.groupLabel}>{group.label}</Text>
              {group.teams.map((team) => (
                <TouchableOpacity
                  key={team.value}
                  onPress={() => {
                    setSelectedTeam(team);
                    setOpen(false);
                  }}
                >
                  <Text>{team.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          <Button title="Create Team" onPress={() => setShowNewTeamDialog(true)} />
          <Button title="Close" onPress={() => setOpen(false)} />
        </View>
      </Modal>
      <Modal visible={showNewTeamDialog} animationType="slide">
        <View style={styles.modal}>
          <Text>Create team</Text>
          <Input placeholder="Team name" />
          <Button title="Create" onPress={() => setShowNewTeamDialog(false)} />
          <Button title="Cancel" onPress={() => setShowNewTeamDialog(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  groupLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
