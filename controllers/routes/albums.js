const router = require('express').Router()
const Albums = require('../../models/queries/albums')

router.get('/:albumID', (request, response) =>
  Albums.getAlbumsByID(request.params.albumID)
    .then( albums => response.render('album', { album: albums[0]}))
    .catch(error => response.status(500).render('error', { error: error }))
)

module.exports = { router }
