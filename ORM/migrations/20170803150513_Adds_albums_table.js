
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', (table) => {
    table.increments(),
    table.string('title'),
    table.string('artist')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};
