const router = require('express').Router()
const { AlbumsORM } = require('../../ORM/bookshelf')

router.get('/:albumID', (request, response) => {
  AlbumsORM.forge({id: request.params.albumID})
    .fetch({withRelated: ['reviews']})
    .then( album => response.render('album', { album: album, reviews: album.relations.reviews.models, session: request.session.passport }))
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
