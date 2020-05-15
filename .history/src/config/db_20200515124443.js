export const db = {
  development: {
    client: 'mysql',
    connection: {
      database: '10.0.10.10',
      user: 'root',
      password: 'q1w2e3r4'
    },
    migrations: {
      tableame: 'knex_migrations',
      directory: ''
    }
  }
}
