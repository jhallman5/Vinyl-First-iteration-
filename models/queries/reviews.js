const { query } = require('../config_db')

const getReviewsByAlbumId = (albumId) =>
  query('SELECT * FROM albums a LEFT JOIN reviews r ON a.id = r.album_id WHERE a.id = $1 ORDER BY created_on DESC', [albumId])

module.exports = {
  getReviewsByAlbumId
}
