// https://nextjs.org/docs/advanced-features/custom-server

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const nextConfig = require('./next.config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname, conf: nextConfig })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) throw err
    console.warn('> Ready on http://localhost:3000')
  })
})
