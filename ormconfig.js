module.exports = {
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  type: 'postgres',
  logging: false,
  entities: [`src/models/**/*.ts`],
  migrations: [`src/database/migrations/**/*.ts`],
  subscribers: [`src/subscribers/**/*.ts`],
  cli: {
    entitiesDir: `src/models`,
    migrationsDir: `src/database/migrations`,
    subscribersDir: `src/subscribers`,
  },
};
