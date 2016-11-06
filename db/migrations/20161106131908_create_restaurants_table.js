exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('phone_number');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
