const pg = require('pg')
const dbName = 'vinylKnex'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const client = new pg.Client(connectionString)

module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    }
};
