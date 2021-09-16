const server = require('http').createServer()
const fs = require('fs')

server.on('request', (req, res) => {
  const start = new Date()
  ///////// -----solution 1----- //////////
  //   fs.readFile(__dirname + '/txt/large-text.txt', (err, data) => {
  //     console.log(new Date() - start)
  //     res.end(data)
  //   })

  /////////------solution 2 STREAM------//////////
  //   const readable = fs.createReadStream(__dirname + '/txt/large-text.txt')
  //   readable.on('data', chunk => {
  //     res.write(chunk)
  //   })
  //   readable.on('end', () => {
  //     console.log(new Date() - start)
  //     res.end()
  //   })

  //   readable.on('error', err => {
  //     res.statusCode = 500
  //     res.end('An error ocurred')
  //   })

  /// solution 3
  const readable = fs.createReadStream(__dirname + '/txt/large-text.txt')
  readable.pipe(res)
})
server.listen('8080', '127.0.0.1', () => {
  console.log('Listening...')
})
