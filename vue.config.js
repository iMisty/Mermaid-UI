/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-12 18:49:47
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-10 11:48:11
 * @Description: file content
 * @FilePath: \Mermaid-UI\vue.config.js
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const resolve = (dir) => _resolve(__dirname, dir);

module.exports = {
  css: {
    requireModuleExtension: true,
    extract: false,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    },
  },
  devServer: {
    port: 18800,
  },
  pages: {
    index: {
      entry: './example/main.ts',
      template: './public/index.html',
      filename: './index.html',
    },
  },
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images');
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 13312 }));
  },
  productionSourceMap: false,
};
// export const css = {
//   modules: true,
//   extract: false,
// };
// export const configureWebpack = {
//   resolve: {
//     extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
//   },
// };
// export const devServer = {
//   port: 8800,
// };
// export const pages = {
//   index: {
//     entry: 'src/index.ts',
//     template: 'public/index.html',
//     filename: 'index.html',
//   },
// };
// export const chainWebpack = (config) => {
//   const imagesRule = config.module.rule('images');
//   imagesRule
//     .use('url-loader')
//     .loader('url-loader')
//     .tap((options) => Object.assign(options, { limit: 13312 }));
// };
