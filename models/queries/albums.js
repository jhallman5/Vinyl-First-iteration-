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
        .catch( error => console.log('query Error ---->', error) )
    )
    .catch( error => console.log('query Error ---->', error) )
    
module.exports = {
  getAlbums,
  getAlbumsByID,
  getAllAlbumsAndAllReviews
}
