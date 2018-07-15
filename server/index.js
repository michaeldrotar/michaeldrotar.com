/* eslint-env node */
import http from 'http';
import Koa from 'koa';
import Router from 'koa-router';

import api from './api';
import ui from './ui';

// import Game from '../lib/brick-engine/game';
import { server as latencyCheckerServer } from '../games/latency-checker/server';
//
// new Game().start();

const app = new Koa();
const router = new Router();
const server = http.createServer(app.callback());

latencyCheckerServer(server);

let routes = [['/api', api], ['', ui]];
routes.forEach(route => {
  router.use(route[0], route[1].routes(), route[1].allowedMethods());
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 8081;
server.listen(port);
console.log('Server started on port ' + port); // eslint-disable-line no-console
