import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Album } from "../data/albums"

interface AlbumArtworkProps {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
}: AlbumArtworkProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: album.cover }}
          style={[
            styles.image,
            {
              width: width,
              height: height,
              aspectRatio: aspectRatio === "portrait" ? 3/4 : 1,
            },
          ]}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.albumName}>{album.name}</Text>
        <Text style={styles.artistName}>{album.artist}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  image: {
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 8,
  },
  albumName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 12,
    color: '#666',
  },
});
