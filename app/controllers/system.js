const router = require('koa-router')()

router.get('/', async function (ctx, next) {
  await ctx.render('system/homepage.njk', { key: 'value' })
})

module.exports = router
