import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Mudei para 'postgres'

  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'), // Certifique-se de que o host está correto
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'blog-strapi-1'),
        user: env('DATABASE_USERNAME', 'postgres'), // Verifique se é 'postgres'
        password: env('DATABASE_PASSWORD', '123456789'), // Verifique a senha
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    // Removido código do MySQL e SQLite para foco em PostgreSQL
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
