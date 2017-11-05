const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.config.dev')
const baseHTML = require('./src/index.html')

const ip = '0.0.0.0'
const port = process.env.PORT || 3000
const app = express()
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: 'errors-only',
  })
)

app.use(webpackHotMiddleware(compiler))

// index.html links to 2 <script> files,
// one has to be ignored when developing (yarn dev)
// that's why we route one of them to 404
app.get('/static/404', (req, res) => {
  res.status(404).send('')
})

app.get('*', (req, res) => {
  res.send(baseHTML())
})

app.listen(port, ip, err => {
  if (err) {
    console.warn(err)
    return
  }

  console.info('\x1b[32m', `[Development] Express is running on http://${ip}:${port}`, '\x1b[0m')
})
