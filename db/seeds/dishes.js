exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('dishes').insert({
          id: 1, restaurant_id: 1, name: 'Corn Salad',
          price: '4.99', catetory: 'Appetizer'
        }),
        knex('dishes').insert({
          id: 2, restaurant_id: 1, name: 'Grilled Peppers',
          price: '6.49', catetory: 'Appetizer'
        }),
        knex('dishes').insert({
          id: 3, restaurant_id: 1, name: 'Beef Libs',
          price: '11.99', catetory: 'Main'
        }),
        knex('dishes').insert({
          id: 4, restaurant_id: 1, name: 'Joe Special',
          price: '14.99', catetory: 'Main'
        }),
        knex('dishes').insert({
          id: 5, restaurant_id: 1, name: 'Coke',
          price: '2.99', catetory: 'Drink'
        }),
        knex('dishes').insert({
          id: 6, restaurant_id: 1, name: 'Italian Soda', 
          price: '2.99', catetory: 'Drink'
        })
      ]);
    });
};
