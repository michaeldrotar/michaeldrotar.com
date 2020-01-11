const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new FaviconsWebpackPlugin('./src/assets/logo.png')]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/stylesheets/application/_config.scss";
        `,
        sassOptions: {
          includePaths: ['./node_modules']
        }
      }
    }
  }
};
