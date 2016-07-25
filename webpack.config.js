var webpack = require('webpack');
var path = require('path');

// var config = {
//     entry: './src',               // entry point
//     output: {                     // output folder
//         path: './dist',           // folder path
//         filename: 'my-app.js'     // file name
//     }
// };
// module.exports = config;

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src',               // entry point
  output: {                     // output folder
      path: './dist',           // folder path
      filename: 'my-app.js'     // file name
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      webworkify: 'webworkify-webpack'//,
      //'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js') // es no necessito por que el 'path' defaults to node_modules
    }
  },
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel',
      //   exclude: /node_modules/,
      //   query: {
      //     presets: ['es2015', 'stage-0']
      //   }
      // },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
        loader: 'worker'
      },
      {
        test: /mapbox-gl.+\.js$/,
        loader: 'transform/cacheable?brfs'
      }
    ]
  },
};
