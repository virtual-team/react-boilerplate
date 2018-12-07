
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const requestDir = path.resolve(__dirname, '../request')

let requests = []
fs.readdirSync(requestDir).forEach(file => { 
  requests.concat(require(path.join(requestDir, file)))
})

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: true
  })) // Parsing application/x-www-form-urlencoded
  app.use(bodyParser.json()) // Parsing application/json

  requests.forEach(({ method, path, data }) => {
    app[method](path, data)
  })
}