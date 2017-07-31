const router = require('express').Router()
const auth = require('./auth').router
const albums = require('./albums').router
const users = require('./users').router
const reviews = require('./reviews').router
const { sessionChecker } = require('../helper_functions')
const Albums = require('../../models/queries/albums')

router.use(auth)
router.use(sessionChecker)
router.use('/users', users)
router.use('/albums', albums)
router.use('/reviews', reviews)

router.get('/search', (request, response) => {
  response.render('search', {albums: null, session: request.session.passport } )
})

router.post('/search', (request, response) => {
  const {searchTerm} = request.body
  Albums.searchAlbums(searchTerm)
    .then( result => {
      response.render('search', { albums: result, session: request.session.passport } )
    })
})

router.use( (request, response, next) =>
  response.status(404).render('not_found')
)

module.exports = { router }
