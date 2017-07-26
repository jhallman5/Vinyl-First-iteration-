const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

const { router } = require('./controllers/routes')
const { passport }  = require('./auth/passport')

const server = express()
const port = process.env.PORT || 3000

require('ejs')
server.set('view engine', 'ejs');

server.use('/scripts', express.static(__dirname + '/node_modules/bulma/css'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(session({
  secret:'SHHHHH',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

server.use(passport.initialize())
server.use(passport.session())

server.use(router)

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
