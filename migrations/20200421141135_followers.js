
exports.up = async function(knex) {
    await knex.schema.createTable("followers", (table) => {
        table.increments('id')
        table.integer('user_id').unique()
        table.text('username').notNull().unique()
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("followers")
};
