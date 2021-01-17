/**
 * @file 自定义 Storybook 的 webpack 配置，使用统一的配置，勿改
 * @author picheng@sensorsdata.cn
 *
 * @see http://gitlab.internal.sensorsdata.cn/components/components-info/blob/master/buildWebpackConfig.js
 */

const path = require('path');
const componentsInfo = require('components-info');

module.exports = componentsInfo.buildWebpackConfig({
  sourceDir: path.resolve(__dirname, `../src`),
  demoDir: path.resolve(__dirname, `./`),
  nodeModulesDir: path.resolve(__dirname, `../node_modules/`)
});
