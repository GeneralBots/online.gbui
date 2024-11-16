import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Task } from '../data/schema';
import { priorities, statuses } from '../data/data';

interface DataTableToolbarProps {
  onFilter: (filteredData: Task[]) => void;
  data: Task[];
}

export const DataTableToolbar: React.FC<DataTableToolbarProps> = ({ onFilter, data }) => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [priorityFilter, setPriorityFilter] = useState<string[]>([]);

  const applyFilters = () => {
    const filteredData = data.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = statusFilter.length === 0 || statusFilter.includes(task.status);
      const matchesPriority = priorityFilter.length === 0 || priorityFilter.includes(task.priority);
      return matchesSearch && matchesStatus && matchesPriority;
    });
    onFilter(filteredData);
  };

  const toggleFilter = (filter: string[], value: string, setFilter: (filter: string[]) => void) => {
    const newFilter = filter.includes(value)
      ? filter.filter(f => f !== value)
      : [...filter, value];
    setFilter(newFilter);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filter tasks..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          applyFilters();
        }}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Ionicons name="funnel-outline" size={16} color="gray" />
          <Text>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Ionicons name="funnel-outline" size={16} color="gray" />
          <Text>Priority</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
});
