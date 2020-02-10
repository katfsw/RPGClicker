
exports.up = function(knex) {
    return knex.schema.createTable('items', items=>{
        items
        .increments()
  
        items
        .string('name', 128)
        .notNullable()
        .unique()
  
        items
        .string('imageurl', 128)
        .notNullable()
        
        items
        .integer('rarity')
        .notNullable()

        items
        .string('description', 128)
        .notNullable()

        items
        .integer('Stab')

        items
        .integer('Slash')
  
        items
        .integer('Crush')

        items
        .integer('Magic')

        items
        .integer('Range')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
