
exports.up = async function(knex) {
  await knex.schema.createTable('media_post', (table) => {
      table.increments('id')
      table.integer('post_id').notNull().unique()
      table.text('url').notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('media_post')
};
