const router = require('express').Router()
const database = require('../../models/database')


router.get('/', (request, response) => {
  database.getAlbums()
    .then( albums => {
      response.render('home', { albums: albums })
    })
    .catch( error => {
      response.status(500).render('error', { error: error })
    })
})

router.get('/albums/:albumID', (request, response) =>
  database.getAlbumsByID(request.params.albumID)
    .then( albums =>
      response.render('album', { album: albums[0]})
    )
    .catch(error =>
      response.status(500).render('error', { error: error })
    )
)

router.use( (request, response) =>
  response.status(404).render('not_found')
)

module.exports = { router }
