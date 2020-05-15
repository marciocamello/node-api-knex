// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'nodeapi',
      host: '10.0.10.10',
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
