import Router from 'koa-router';

import { routes as latencyCheckerRoutes } from './latency-checker';

var router = new Router();

router.use('/latency-checker', latencyCheckerRoutes);

export default router;
