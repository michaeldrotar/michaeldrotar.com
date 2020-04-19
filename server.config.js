const path = require('path');
const nodeExternals = require('webpack-node-externals');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './server/index.js',
  target: 'node',
  node: {
    __dirname: false,
  },
  devtool: env == 'development' ? 'inline-source-map' : false,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
};
