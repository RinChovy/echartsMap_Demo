module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '58',
          safari: '10',
        },
        useBuiltIns: 'usage',
        corejs: '3.15.2',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@jiaminghi/data-view-react',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        customName: name => {
          const str = name.replace(name[0], name[0].toLowerCase());
          return `@jiaminghi/data-view-react/es/${str}`;
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
