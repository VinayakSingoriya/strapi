
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env('DATABASE_HOST', 'postgres.cwdvabyf470u.us-east-1.rds.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'postgres'),
//       // ssl: {
//       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       // },
//     },
//     useNullAsDefault: true,
//   },
// });

// this is for development

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
