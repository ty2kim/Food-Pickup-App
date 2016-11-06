exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('phone_number');
    table.boolean('is_owner');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
