let ExtractTextPlugin = require('extract-text-webpack-plugin');

// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    loaders: [
      {test: /\.less$/i, loader: extractLESS.extract(['css','less'])}
    ]
  },
  loaders : [{
    test : /\.(less|css)$/,
    loader: ExtractTextPlugin.extract('style', 'css!less')
}],
  plugins: [
    extractCSS,
    extractLESS
  ]
};