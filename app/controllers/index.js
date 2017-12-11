const router = require('koa-router')()

router.use('/', require('./system').routes())

module.exports = router
