
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

        items
        .integer('Stab_Defense')

        items
        .integer('Slash_Defense')

        items
        .integer('Crush_Defense')

        items
        .integer('Magic_Defense')

        items
        .integer('Range_Defense')

        items
        .integer('Strength')

        items
        .integer('Ranged_Strength')

        items
        .integer('Magic_Damage')

        items
        .integer('Speed')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
