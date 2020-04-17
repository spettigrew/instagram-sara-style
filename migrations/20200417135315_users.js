
exports.up = async function(knex) { 
    await knex.schema.createTable("users", (table) => {
        // table.integer('id').notNull().unique().primary() or
        table.increments('id')
        table.text('name').notNull()
        table.text('username').notNull().unique()
        table.text('email').notNull().unique()
        table.text('password').notNull()
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
}
