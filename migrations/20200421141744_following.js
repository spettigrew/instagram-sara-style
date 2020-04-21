
exports.up = async function(knex) {
    await knex.schema.createTable("following", (table) => {
        table.increments('id')
        table.integer('user_id').unique()
        table.text('name').notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("following")
};
