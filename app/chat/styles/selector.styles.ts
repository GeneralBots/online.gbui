import { StyleSheet } from 'react-native';

export const selectorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  logo: {
    width: 150,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#ffffff',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00f3ff',
  },
  avatarText: {
    color: '#00f3ff',
    fontSize: 20,
  },
  itemContent: {
    marginLeft: 12,
    flex: 1,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    color: '#666666',
    fontSize: 14,
    marginTop: 4,
  },
});
