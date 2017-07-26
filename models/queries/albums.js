const { query } = require('../config_db')

const getAlbums = () =>
  query("SELECT * FROM albums", [])

const getAlbumsByID = (albumID) =>
  query("SELECT * FROM albums WHERE id = $1", [albumID])

const getAllAlbumsAndAllReviews = () =>
  query("SELECT * FROM albums",[])
    .then( albums =>
      query("SELECT * FROM reviews ORDER BY created_on DESC",[])
        .then( reviews => {
          return {albums, reviews}
        })
    )

const getReviewsByAlbumId = (albumId) =>
  query('SELECT * FROM albums a LEFT JOIN reviews r ON a.id = r.album_id WHERE a.id = $1 ORDER BY created_on DESC', [albumId])




// const getMyReviewsByAlbumId = (albumId) => {
//   query("SELECT * FROM albums WHERE id = $1", [albumId])
// }

module.exports = {
  getAlbums,
  getAlbumsByID,
  getAllAlbumsAndAllReviews,
  getReviewsByAlbumId
}
