import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export async function ensureAssetLoaded(assetPath: string): Promise<string> {
  try {
    const asset = Asset.fromModule(assetPath);
    if (!asset.localUri) {
      await asset.downloadAsync();
    }
    return asset.localUri;
  } catch (error) {
    console.error('Failed to load asset:', error);
    throw error;
  }
}

export async function cacheAssets(assets: string[]): Promise<void> {
  try {
    const cacheDirectory = `${FileSystem.cacheDirectory}sounds/`;
    await FileSystem.makeDirectoryAsync(cacheDirectory, { intermediates: true });

    await Promise.all(
      assets.map(async (asset) => {
        const assetName = asset.split('/').pop();
        const cachedPath = `${cacheDirectory}${assetName}`;

        const fileInfo = await FileSystem.getInfoAsync(cachedPath);
        if (!fileInfo.exists) {
          await FileSystem.copyAsync({
            from: asset,
            to: cachedPath,
          });
        }
      })
    );
  } catch (error) {
    console.error('Failed to cache assets:', error);
  }
}
