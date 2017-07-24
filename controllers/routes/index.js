const router = require('express').Router()
const database = require('../../models/database')
const albums = require('../../models/queries/albums')
const user = require('../../models/queries/users')

router.get('/', (request, response) => {
  albums.getAlbums()
    .then( albums => {
      response.render('home', { albums: albums })
    })
    .catch( error => {
      response.status(500).render('error', { error: error })
    })
})

router.get('/albums/:albumID', (request, response) =>
  albums.getAlbumsByID(request.params.albumID)
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
  console.log( "(>'')>  ", request.body )
  const user = request.body
  user.createUser(user)
})

router.use( (request, response) =>
  response.status(404).render('not_found')
)

module.exports = { router }
