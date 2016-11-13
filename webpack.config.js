let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('./css/[name].css');

module.exports = {
  entry: {
    app: './src/index.js',

  },
  output: {
    path: './build',
    filename: './js/[name].js',
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
