const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './docs/main.js'
  },
  output: {},
  resolve: {
    extensions: ['.js','.vue','.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': this.resolve('docs'),
      '@components': this.resolve('src/components'),
      '@less': this.resolve('src/less'),
      '@utils': this.resolve('src/utils')
    }
  },
  modules: {
    rules: []
  }
}