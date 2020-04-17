
exports.up = async function(knex) {
  await knex.schema.createTable('posts', (table) => {
      table.increments('id')
      table.integer('user_id').notNull().unique()
      table.text('caption')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('posts')
};
