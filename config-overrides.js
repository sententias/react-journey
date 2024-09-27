const { override, addBabelPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  ...addBabelPlugins(
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
  ),
  addWebpackAlias({
    // 使用@代替根目录，根据实际路径调整
    '@': path.resolve(__dirname, 'src'),
    '@@': path.resolve(__dirname, 'public')
  }),
  config => {
    // 添加解析扩展
    config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', '.json'];
    return config;
  }
);
