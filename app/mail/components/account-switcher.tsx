import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

interface Account {
  email: string;
  label: string;
  icon: React.ReactNode;
}

interface AccountSwitcherProps {
  isCollapsed: boolean;
  accounts: Account[];
}

function AccountSwitcher({ isCollapsed, accounts }: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0].email);
  const [modalVisible, setModalVisible] = useState(false);

  const selectedAccountData = accounts.find((account) => account.email === selectedAccount);

  const renderItem = ({ item }: { item: Account }) => (
    <TouchableOpacity
      style={styles.accountItem}
      onPress={() => {
        setSelectedAccount(item.email);
        setModalVisible(false);
      }}
    >
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.accountEmail}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        style={[styles.selectTrigger, isCollapsed && styles.collapsedTrigger]}
        onPress={() => setModalVisible(true)}
      >
        {selectedAccountData && (
          <>
            <View style={styles.iconContainer}>{selectedAccountData.icon}</View>
            {!isCollapsed && (
              <Text style={styles.selectedAccountLabel}>{selectedAccountData.label}</Text>
            )}
          </>
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={accounts}
              renderItem={renderItem}
              keyExtractor={(item) => item.email}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  selectTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  collapsedTrigger: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  selectedAccountLabel: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  accountEmail: {
    marginLeft: 10,
  },
});

export default AccountSwitcher;
