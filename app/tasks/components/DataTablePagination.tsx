import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DataTablePaginationProps {
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  totalItems: number;
}

export const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  return (
    <View style={styles.container}>
      <Text>{}</Text>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setPage(0)} disabled={page === 0}>
          <Ionicons name="chevron-back-outline" size={24} color={page === 0 ? 'gray' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage(page - 1)} disabled={page === 0}>
          <Ionicons name="chevron-back-outline" size={24} color={page === 0 ? 'gray' : 'black'} />
        </TouchableOpacity>
        <Text>{}</Text>
        <TouchableOpacity onPress={() => setPage(page + 1)} disabled={page === totalPages - 1}>
          <Ionicons name="chevron-forward-outline" size={24} color={page === totalPages - 1 ? 'gray' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage(totalPages - 1)} disabled={page === totalPages - 1}>
          <Ionicons name="chevron-forward-outline" size={24} color={page === totalPages - 1 ? 'gray' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
