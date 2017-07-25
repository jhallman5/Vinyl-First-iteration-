const { query } = require('../config_db')

const getAlbums = () =>
  query("SELECT * FROM albums", [])

const getAlbumsByID = (albumID) =>
  query("SELECT * FROM albums WHERE id = $1", [albumID])

module.exports = {
  getAlbums,
  getAlbumsByID
}
