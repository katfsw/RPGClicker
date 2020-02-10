
exports.up = function(knex) {
    return knex.schema.createTable('users_inventory', items=>{
        items
        .increments()
  
       items
       .integer('inventory_items')
       .references('item_id')
       .inTable('users_items')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users_inventory')
};
