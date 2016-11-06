exports.up = function(knex, Promise) {
  return knex.schema.createTable('carts', function (table) {
    table.increments();
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('dish_id').references('id').inTable('dishes');
    table.integer('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('carts');
};
