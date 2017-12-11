const router = require('koa-router')()

router.get('/', async function (ctx, next) {
  await ctx.render('system/homepage')
  // ctx.body = 'Hello'
})

module.exports = router
