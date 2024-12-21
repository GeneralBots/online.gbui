import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { soundAssets } from '../../../public/sounds/manifest';
import { cacheAssets } from '../lib/asset-loader';


export function SoundInitializer({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeSounds = async () => {
      try {
          await cacheAssets(Object.values(soundAssets));
        setIsReady(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize sounds');
      }
    };

    //initializeSounds();
    setIsReady(true);
  }, []);

  if (error) { 

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading sounds...</Text>
      </View>
    );
  }

  return <>{children}</>;
}
