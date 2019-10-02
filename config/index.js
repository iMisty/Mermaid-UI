const path = require('path');

module.exports = {
  lib: {
    env: require('./prod.env'),
    filename: 'YukarinStyle',
    name: 'Yukarin',
    assetsRoot: path.resolve(__dirname,'../dist'),
    assetsSubDirectory: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js','css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}