const { query } = require('../config_db')

const getReviewsByAlbumId = (albumId) =>
  query('SELECT * FROM albums a LEFT JOIN reviews r ON a.id = r.album_id WHERE a.id = $1 ORDER BY created_on DESC', [albumId])

const createReview = (albumId, userId, content) =>
  query('INSERT INTO reviews VALUES (DEFAULT, $1, $2, $3)', [albumId, userId, content])

const deleteReview = (reviewId) =>
  query('DELETE FROM reviews WHERE id = $1', [reviewId])

module.exports = {
  getReviewsByAlbumId,
  createReview,
  deleteReview
}
