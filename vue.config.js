const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new FaviconsWebpackPlugin('./src/assets/logo.png')]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/stylesheets/application/_config.scss";
        `,
        includePaths: ['./node_modules']
      }
    }
  }
};
