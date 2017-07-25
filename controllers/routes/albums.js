const router = require('express').Router()
const Albums = require('../../models/queries/albums')

router.get('/:albumID', (request, response,next) =>
  Albums.getAlbumsByID(request.params.albumID)
    .then( albums => response.render('album', { album: albums[0], session: request.session.passport  }))
    .catch( error => response.status(500).render('error', { error: error }))
)

module.exports = { router }
