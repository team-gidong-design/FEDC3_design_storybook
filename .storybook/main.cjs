const path = require('path');
const react = require('@vitejs/plugin-react');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/src': path.resolve(__dirname, '../src'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/stories': path.resolve(__dirname, '../src/stories'),
      '@/types': path.resolve(__dirname, '../src/types'),
    };

    return config;
  },
};
