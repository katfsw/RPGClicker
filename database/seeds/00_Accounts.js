
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { username: "brandy", password:"password", email:"brandybeckerfsw@gmail.com", name:"brandy", quote:"Cats, Code, Coffee", created_at:""}
      ]);
    });
};

// { username: "", password:"", email:"", name:"", quote:"", created_at:""}
/* 
   accounts
      .date('start_date')

      accounts
      .timestamp('created_at').defaultTo(knex.fn.now())
*/
