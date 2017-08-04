const knex = require('knex')(require('./knexfile'))
const bookshelf = require('bookshelf')(knex)

const AlbumsORM = bookshelf.Model.extend({
  tableName: 'albums',
  reviews: function(){
    return this.hasMany(ReviewsORM )
  }
})

const ReviewsORM = bookshelf.Model.extend({
  tableName: 'reviews',
  album: function(){
    return this.belongsTo('albums')
  }
})

const UsersORM = bookshelf.Model.extend({
  tableName: 'users',
  reviews: function(){
    return this.hasMany(ReviewsORM )
  }
})

module.exports = {
  AlbumsORM,
  ReviewsORM,
  UsersORM

}
