const knex = require("knex")
const knexfile = require('./knexfile') //active connection to db

module.exports = knex(knexfile)
