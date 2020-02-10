
exports.up = function(knex) {
  return knex.schema.createTable('accounts', accounts=>{
      accounts
      .increments()

      accounts
      .string('username',128)
      .notNullable()
      .unique()

      accounts
      .string('password',128)
      .notNullable()

      accounts
      .string('email',128)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
