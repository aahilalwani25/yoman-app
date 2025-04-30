const {withNativeWind} = require('nativewind/metro');
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname);

//resolve issue for Error: Unable to manually set color scheme without using darkMode: class. See: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
config = withNativeWind(config, { input: './src/global.css' });

module.exports = wrapWithReanimatedMetroConfig(config);