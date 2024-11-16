import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { TeamSwitcher } from './components/TeamSwitcher';
import { MainNav } from './components/MainNav';
import { Search } from './components/Search';
import { UserNav } from './components/UserNav';
import { CalendarDateRangePicker } from './components/DateRangePicker';
import { Overview } from './components/Overview';
import { RecentSales } from './components/RecentSales';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TeamSwitcher />
        <MainNav />
        <View style={styles.rightHeader}>
          <Search />
          <UserNav />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.actions}>
            <CalendarDateRangePicker />
            <Button title="Download" />
          </View>
        </View>
        <View style={styles.cards}>
          <Card>
            <Card.Title>Total Revenue</Card.Title>
            <Text style={styles.cardValue}>$45,231.89</Text>
            <Text style={styles.cardSubtext}>+20.1% from last month</Text>
          </Card>
          <Card>
            <Card.Title>Subscriptions</Card.Title>
            <Text style={styles.cardValue}>+2350</Text>
            <Text style={styles.cardSubtext}>+180.1% from last month</Text>
          </Card>
          <Card>
            <Card.Title>Sales</Card.Title>
            <Text style={styles.cardValue}>+12,234</Text>
            <Text style={styles.cardSubtext}>+19% from last month</Text>
          </Card>
          <Card>
            <Card.Title>Active Now</Card.Title>
            <Text style={styles.cardValue}>+573</Text>
            <Text style={styles.cardSubtext}>+201 since last hour</Text>
          </Card>
        </View>
        <View style={styles.charts}>
          <Card>
            <Card.Title>Overview</Card.Title>
            <Overview />
          </Card>
          <Card>
            <Card.Title>Recent Sales</Card.Title>
            <Text>You made 265 sales this month.</Text>
            <RecentSales />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  rightHeader: { flexDirection: 'row', marginLeft: 'auto' },
  content: { padding: 16 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  actions: { flexDirection: 'row' },
  cards: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  charts: { marginTop: 16 },
  cardValue: { fontSize: 20, fontWeight: 'bold' },
  cardSubtext: { fontSize: 12, color: 'gray' },
});
