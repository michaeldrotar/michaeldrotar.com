import Router from 'koa-router';

var router = new Router();

router.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  await next();
});

router.get('/', async (ctx) => {
  ctx.body = {
    message: `success! ${process.env.NODE_ENV}/${process.env.BLAH}`,
  };
});

export default router;
