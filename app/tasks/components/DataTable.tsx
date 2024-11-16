import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Task } from '../data/schema';
import { labels, priorities, statuses } from '../data/data';
import { DataTableToolbar } from './DataTableToolbar';
import { DataTablePagination } from './DataTablePagination';

interface DataTableProps {
  data: Task[];
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const renderItem = ({ item }: { item: Task }) => {
    const label = labels.find(l => l.value === item.label);
    const status = statuses.find(s => s.value === item.status);
    const priority = priorities.find(p => p.value === item.priority);

    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.id}</Text>
        <View style={styles.cell}>
          <Text style={styles.badge}>{label?.label}</Text>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.cell}>
          <Ionicons name={status?.icon as any} size={16} color="gray" />
          <Text>{status?.label}</Text>
        </View>
        <View style={styles.cell}>
          <Ionicons name={priority?.icon as any} size={16} color="gray" />
          <Text>{priority?.label}</Text>
        </View>
        <TouchableOpacity style={styles.cell}>
          <Ionicons name="ellipsis-horizontal" size={16} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DataTableToolbar onFilter={setFilteredData} data={data} />
      <FlatList
        data={filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerCell}>ID</Text>
            <Text style={styles.headerCell}>Title</Text>
            <Text style={styles.headerCell}>Status</Text>
            <Text style={styles.headerCell}>Priority</Text>
            <Text style={styles.headerCell}>Actions</Text>
          </View>
        )}
      />
      <DataTablePagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalItems={filteredData.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#eee',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 5,
  },
});
