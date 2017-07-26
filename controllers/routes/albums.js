const router = require('express').Router()
const Reviews = require('../../models/queries/reviews')
const { processAlbumsWithReviews } = require('../helper_functions')

router.get('/:albumID', (request, response,next) =>
  Reviews.getReviewsByAlbumId(request.params.albumID)
    .then( albums => response.render('album', { album: processAlbumsWithReviews(albums), session: request.session.passport  }))
    .catch( error => response.status(500).render('error', { error: error }))
)

module.exports = { router }
