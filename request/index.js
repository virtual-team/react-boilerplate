
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const requestDir = path.resolve(__dirname, './')

let requests = []
fs.readdirSync(requestDir).forEach(file => {
  if (file.indexOf('.json') !== -1) {
    requests = requests.concat(require(path.join(requestDir, file)))
  }
})

module.exports = app => {
  // Parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  // Parsing application/json
  app.use(bodyParser.json())
  requests.forEach(({ method, path, data }) => {
    app[method](path, (req, res) => {
      res.json(data)
      res.end()
    })
  })
}