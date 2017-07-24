const router = require('express').Router()
const Albums = require('../../models/queries/albums')
const User = require('../../models/queries/users')

router.get('/', (request, response) => {
  Albums.getAlbums()
    .then( albums => response.render('home', { albums: albums }))
    .catch( error => response.status(500).render('error', { error: error }))
})

router.get('/albums/:albumID', (request, response) =>
  Albums.getAlbumsByID(request.params.albumID)
    .then( albums =>
      response.render('album', { album: albums[0]})
    )
    .catch(error =>
      response.status(500).render('error', { error: error })
    )
)

router.get('/sign_in', (request, response) =>
  response.render('sign_in')
)


router.get('/sign_up', (request, response) =>
  response.render('sign_up')
)

router.post('/sign_up', (request, response) => {
  const user = request.body
  User.createUser(user)
})

router.get('/user/:userId', (request, response) => {
  User.getUserById(request.params.userId)
    .then( data => response.render('user_profile', { data: data[0] }))
    .catch( error => response.status(500).render('error', { error: error }))
})

router.use( (request, response) =>
  response.status(404).render('not_found')
)

module.exports = { router }
