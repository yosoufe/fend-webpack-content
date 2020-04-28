const path = require('path');
const webpack = require('webpack');

module.exports = {
  // changing the default folder of entry
  // from here webpack starts to build the dependency tree
  entry: `./src/client/index.js`, 
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};