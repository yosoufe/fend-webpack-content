const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin'); // reference to plugin

module.exports = {
  // changing the default folder of entry
  // from here webpack starts to build the dependency tree
  entry: `./src/client/index.js`, 
  module: {
    rules: [
      {
        // loader to be able to use es6 in browser side
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins:[
    // plugin to copy html files into dist folder
    // it also adds the js file into the html file in the dis folder
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    })
  ]
};