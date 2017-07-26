const router = require('express').Router()
const auth = require('./auth').router
const albums = require('./albums').router
const users = require('./users').router
const reviews = require('./reviews').router
const { sessionChecker } = require('../helper_functions')

router.use(auth)
router.use(sessionChecker)
router.use('/users', users)
router.use('/albums', albums)
router.use('/reviews', reviews)

router.use( (request, response, next) =>
  response.status(404).render('not_found')
)

module.exports = { router }
