const config = require('./knexfile.js')

const kenx =  require('knex')(config)

const bookshelf = require('bookshelf')(knex)


const Albums = bookshelf.Model.extend({
  tableName: 'albums'
})


const pg = require('pg')
const dbName = 'vinylKnex'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const client = new pg.Client(connectionString)

client.connect()


const query = (sql, variables) =>
  client.query(sql, variables)
    .then( result => result.rows )
    .catch( error => {
      console.error('query error --->', error)
      throw new Error(error)
    })
//
// module.exports = { query }

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  migrations: {
    directory: ''
  },
  seeds: {
    directory: ''
  }

}
