const knex = require("knex")
const knexfile = require('../src/knexfile') //active connection to db

module.exports = knex(knexfile)
