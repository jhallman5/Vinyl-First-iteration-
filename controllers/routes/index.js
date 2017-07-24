const router = require('express').Router()
const no_auth = require('./no_auth').router
const albums = require('./albums').router
const users = require('./users').router

router.use(no_auth)
router.use('/user', users)
router.use('/albums', albums)

router.use( (request, response) =>
  response.status(404).render('not_found')
)

module.exports = { router }
