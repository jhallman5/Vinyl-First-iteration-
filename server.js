const express = require('express')
const bodyParser = require('body-parser')
const { router } = require('./controllers/routes')

const server = express()
const port = process.env.PORT || 3000

require('ejs')
server.set('view engine', 'ejs');

server.use(express.static('public'))
server.use('/scripts', express.static(__dirname + '/node_modules/bulma/css'))
server.use(bodyParser.urlencoded({ extended: false }))

server.use(router)

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
