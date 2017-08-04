
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments(),
    table.integer('album_id'),
    table.integer('user_id'),
    table.text('content'),
    table.date('created_on').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
