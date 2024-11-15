const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {});

// Add assetExts for your specific asset types (e.g., images)
config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'svg', 'gif');

module.exports = config;
