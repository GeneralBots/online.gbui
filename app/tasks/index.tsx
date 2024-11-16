import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { DataTable } from './components/DataTable';
import { UserNav } from './components/UserNav';

// Mock data - replace with actual data fetching logic
const tasks = [
  {
    id: "TASK-8782",
    title: "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-7878",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    label: "bug",
    priority: "high"
  },
  // ... add more tasks here
];

export default function TaskPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtitle}>Here's a list of your tasks for this month!</Text>
        </View>
        <UserNav />
      </View>
      <DataTable data={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
});
