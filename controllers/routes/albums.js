const router = require('express').Router()
const Albums = require('../../models/queries/albums')
const { processAlbumsWithReviews } = require('../helper_functions')

router.get('/:albumID', (request, response,next) =>
  Albums.getReviewsByAlbumId(request.params.albumID)
    .then( albums => response.render('album', { album: processAlbumsWithReviews(albums), session: request.session.passport  }))
    .catch( error => response.status(500).render('error', { error: error }))
)

module.exports = { router }
