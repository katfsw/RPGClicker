
exports.up = function(knex) {
    return knex.schema.createTable('chests', chest=>{
        chest
        .increments()
  
        chest
        .string('chest_name')
        .notNullable()

        chest
        .integer('rarity')
        .notNullable()

        chest
        .integer('chest_rewards')
        .references('id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        chest
        .integer('chest_id')
        .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chest')
};
