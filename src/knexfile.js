// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //specifies the DBMS(DataBaseMagangementSystem)
    useNullAsDefault: true, //required for SQLite
    connection: {
      filename: './dev.sqlite3' //location of our db file
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
 }
}
