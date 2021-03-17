/*
 * @Author: Miya
 * @Date: 2021-01-12 10:40:51
 * @LastEditTime: 2021-03-17 14:33:53
 * @LastEditors: Miya
 * @Description: 1.0
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\vue.config.js
 * @Version: 2.0
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'example/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      });
  }
};
