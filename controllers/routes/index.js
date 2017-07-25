const router = require('express').Router()
const no_auth = require('./no_auth').router
const albums = require('./albums').router
const users = require('./users').router

const sessionChecker = (request, response, next) =>
  request.session.passport
    ? next()
    : response.redirect('/sign_in')

router.use(no_auth)
router.use(sessionChecker)
router.use('/user', users)
router.use('/albums', albums)

router.use( (request, response, next) =>
  response.status(404).render('not_found')
)

module.exports = { router }
