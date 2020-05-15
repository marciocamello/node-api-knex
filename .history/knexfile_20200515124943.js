// Update with your config settings.

module.exports = {

  staging: {
    client: 'mysql',
    connection: {
      database: 'nodeapi',
      user: 'root',
      password: 'q1w2e3r4'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/databases/migrations`
    }
  }

}
