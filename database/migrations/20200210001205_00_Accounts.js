
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

      accounts
      .timestamp('created_at').defaultTo(knex.fn.now())

      accounts
      .boolean('is_admin').defaultTo(false)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
