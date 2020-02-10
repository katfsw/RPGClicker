
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { username: 'vuodou', password:'passw0rd', email:'brandybeckerfsw@gmail.com'},
        { username: 'blackmemo', password:'passw0rd', email:'austin.powellfsw@gmail.com'},
        { username: 'username', password:'password', email:'test@test.io'},
        { username: 'username2', password:'password2', email:'test@test.io'}
      ]);
    });
};
