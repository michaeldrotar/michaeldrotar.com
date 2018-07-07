const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
    filename: 'server.js'
  },
  externals: [nodeExternals()]
};
