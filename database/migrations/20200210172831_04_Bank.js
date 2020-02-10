
exports.up = function(knex) {
    return knex.schema.createTable('bank', items=>{
        items
        .increments()
  
       items
       .integer('user_id')
       .references('id')
       .inTable('users')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')

       items
       .integer('bank_items')
       .references('item_id')
       .inTable('users_items')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')

       items
       .integer('bank_pin')
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bank')
};
