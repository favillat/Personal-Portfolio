import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/Personal-Portfolio/',
  },
  html: {
    favicon: './src/assets/img/icon.png',
  },
});



