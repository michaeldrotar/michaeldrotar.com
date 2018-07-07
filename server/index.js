/* eslint-env node */
import Koa from 'koa';
import Router from 'koa-router';

import api from './api';
import ui from './ui';

const app = new Koa();
const router = new Router();

let routes = [['/api', api], ['', ui]];
routes.forEach(route => {
  router.use(route[0], route[1].routes(), route[1].allowedMethods());
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 8081;
app.listen(port);
console.log('Server started on port ' + port); // eslint-disable-line no-console
