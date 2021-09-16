const http = require('http')
const url = require('url')
const fs = require('fs')
const { replaceTemplate } = require('./modules/replaceModule')

const rawproductData = fs.readFileSync(`${__dirname}/server/data.json`, 'utf-8')
const productData = JSON.parse(rawproductData)

const overviewTemp = fs.readFileSync(
  `${__dirname}/server/pages/overview-template.html`,
  'utf-8'
)
const productTemp = fs.readFileSync(
  `${__dirname}/server/pages/product-template.html`,
  'utf-8'
)
const cardTemp = fs.readFileSync(
  `${__dirname}/server/pages/card-template.html`,
  'utf-8'
)

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true)
  switch (pathname) {
    case '/':
    case '/overview':
      res.writeHead('200', { 'Content-Type': 'text/html' })
      const cardsHtml = productData.map(product =>
        replaceTemplate(cardTemp, product)
      )
      const overviewHtml = overviewTemp.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
      res.end(overviewHtml)
      break
    case '/product':
      res.writeHead('200', {
        'Content-Type': 'text/html'
      })

      const product = productData[query.id]
      const productHtml = replaceTemplateVals(productTemp, product)
      res.end(productHtml)
      break
    case '/api':
      res.writeHead('200', {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      })
      res.end(rawproductData)

      break
    default:
      res.writeHead('404', {
        'Content-Type': 'text/html'
      })
      res.end('<h1>404</h1>')
  }
})
server.listen('8080', '127.0.0.1', () => {
  console.log('listening on port 8080')
})
