const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const PORT = process.env.PORT || 3000
http
  .createServer((req, res) => {
    /* const num = _.random(0, 20)
    console.log(num) */
    res.setHeader('Content-Type', 'text/html')
    let path = './views/'
    switch (req.url) {
      case '/':
        path += 'index.html'
        res.statusCode = 200
        break
      case '/about':
        path += 'about.html'
        res.statusCode = 200
        break
      case '/about-me':
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        break
      default:
        path += '404.html'
        res.statusCode = 400
        break
    }
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.end(data)
      }

      // res.write(data)
    })
  })
  .listen(PORT, () => {
    console.log(`------server is running on port ${PORT}`)
  })
