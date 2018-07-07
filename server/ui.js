import Router from 'koa-router';
import serve from 'koa-static';
import send from 'koa-send';

var router = new Router();

router.use(serve('dist'));
router.get('*', async ctx => {
  await send(ctx, 'dist/index.html');
});

export default router;
