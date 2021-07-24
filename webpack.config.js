const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    default: './src/assets/scripts/default.js',
    home: './src/assets/scripts/home.js',
    about: './src/assets/scripts/about.js',
    auth: './src/assets/scripts/auth.js',
    works: './src/assets/scripts/works.js',
    blog: './src/assets/scripts/blog.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
