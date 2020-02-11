
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { username: 'vuodou', password:'passw0rd', email:'brandybeckerfsw@gmail.com', created_at:"", is_admin: true},
        { username: 'blackmemo', password:'passw0rd', email:'austin.powellfsw@gmail.com', created_at:"", is_admin: true},
        { username: 'username', password:'password', email:'test@test.io', created_at:"", is_admin: false},
        { username: 'username2', password:'password2', email:'test@test.io', created_at:"", is_admin: false}
      ]);
    });
};

// { username: "", password:"", email:"", start_date: "", created_at:"", is_admin: false}
/* 
   accounts
      .date('start_date')

      accounts
      .timestamp('created_at').defaultTo(knex.fn.now())

      accounts
      .boolean('is_admin').defaultTo(false)
*/
