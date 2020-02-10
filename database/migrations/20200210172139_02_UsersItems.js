
exports.up = function(knex) {
    return knex.schema.createTable('users_items', items=>{
        items
        .increments()
  
       items
       .integer('user_id')
       .references('id')
       .inTable('accounts')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')

       items
       .integer('item_id')
       .references('id')
       .inTable('items')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users_items')
};
