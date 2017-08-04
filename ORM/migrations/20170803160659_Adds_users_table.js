
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments(),
    table.string('email'),
    table.string('username'),
    table.string('password'),
    table.date('member_since').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')

};
