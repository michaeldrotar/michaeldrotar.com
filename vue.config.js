const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new FaviconsWebpackPlugin('./src/assets/logo.png')]
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['./node_modules']
      }
    }
  }
};
