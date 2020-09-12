/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-12 18:49:47
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-12 18:49:52
 * @Description: file content
 * @FilePath: /Mermaid-UI/vue.config.js
 */
module.exports = {
  css: {
    modules: true, // 开启CSS module
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
    },
  },
  devServer: {
    port: 8800, // webpack-dev-server port
  },
};
