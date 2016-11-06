exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          id: 1, name: 'BBQ at Joe',
          address: '22 Parklane', phone_number: '5559871234'
        }),
      ]);
    });
};
