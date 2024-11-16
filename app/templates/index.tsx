import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { PodcastEmptyPlaceholder } from './components/podcast-empty-placeholder';
import { AlbumArtwork } from './components/album-artwork';
import { listenNowAlbums, madeForYouAlbums } from './data/albums';
import { playlists } from './data/playlists';

export default function TemplatesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <View style={styles.content}>
        <Sidebar playlists={playlists} />
        <ScrollView style={styles.mainContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Listen Now</Text>
            <Text style={styles.sectionSubtitle}>Top picks for you. Updated daily.</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumList}>
            {listenNowAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                width={250}
                height={330}
              />
            ))}
          </ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Made for You</Text>
            <Text style={styles.sectionSubtitle}>Your personal playlists. Updated daily.</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumList}>
            {madeForYouAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                width={150}
                height={150}
                aspectRatio="square"
              />
            ))}
          </ScrollView>
          <PodcastEmptyPlaceholder />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  albumList: {
    marginBottom: 24,
  },
});
