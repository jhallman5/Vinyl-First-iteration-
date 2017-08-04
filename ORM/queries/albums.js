// const knex = require('./knexfile')
//
// const getAlbums
// const getAlbumsByID
//
// const getAllAlbumsAndAllReviews
//
// module.exports = {
//   getAlbums,
//   getAlbumsByID,
//   getAllAlbumsAndAllReviews
// }

const bookshelf = require('../bookshelf')

const Albums = bookshelf.Model.extend({
  tableName: 'albums',
  reviews: () => this.hasMany(Reviews)
})

const Reviews = bookshelf.Model.extend({
  tableName: 'reviews'
})

const Users = bookshelf.Model.extend({
  tableName: 'users'
  reviews: () => this.hasMany(Reviews)
})
