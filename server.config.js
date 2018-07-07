const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './server/index.js',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
    filename: 'server.js'
  },
  externals: [nodeExternals()]
};
