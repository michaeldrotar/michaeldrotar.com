require('dotenv').config()

const debug = require('debug')('app:index')
const path = require('path')

const Koa = require('koa')
const helmet = require('koa-helmet')
const compress = require('koa-compress')
const serveStatic = require('koa-better-static2')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

const config = require('./config')
const controllers = require('./controllers')

const app = new Koa()

app.use(views(path.join(__dirname, 'views'), {
  map: {
    html: 'nunjucks'
  }
}))

app.use(helmet())
app.use(compress())
app.use(serveStatic('public', { maxage: 0 }))
app.use(logger())
app.use(bodyParser())

app.use(controllers.routes())
app.use(controllers.allowedMethods())

app.use(async ctx => {
  ctx.status = 404

  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html'
      ctx.body = '<p>Page Not Found</p>'
      break
    case 'json':
      ctx.body = {
        message: 'Page Not Found'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Page Not Found'
  }
})

app.start = function (port = config.PORT) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

if (config.NODE_ENV === 'development') {
  const chokidar = require('chokidar')
  const livereload = require('livereload').createServer()

  const watcher = chokidar.watch(['app'])
  watcher.on('ready', function () {
    watcher.on('all', function (type, filepath) {
      console.log(`Reloading ${filepath}...`)
      Object.keys(require.cache).forEach(function (id) {
        if (/[/\\]app[/\\]/.test(id)) {
          delete require.cache[id]
        }
      })
      livereload.refresh(filepath)
    })
  })
}

module.exports = app
