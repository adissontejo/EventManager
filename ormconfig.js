module.exports = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || 3333, 10),
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE || 'evtm',
  type: 'postgres',
  logging: false,
  entities: ['src/models/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/subscribers',
  },
};
