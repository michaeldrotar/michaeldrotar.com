import Vue from 'vue';
import Router from 'vue-router';

import AppRoutes from './app-routes';
import ErrorRoutes from './error-routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [].concat(AppRoutes, ErrorRoutes)
});
