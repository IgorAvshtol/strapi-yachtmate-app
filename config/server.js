module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
    // keys: env.array('4Z1aDwt6Q0Dfm9Jbjdo9TA==','yY7/BbtoBarNsH5Z1oy7fA==','K9xhZmT74waPwYuYS2AsvA==','7c23V75daGdoQxNxsuex2A=='),
  },
});

// module.exports = ({ env }) => ({
//   host: '0.0.0.0',
//   port: 1337,
//   app: {
//     // keys: env.array('APP_KEYS'),
//     jwtSecret: 'ohLo60mTWFFNbwBiLQWBig==',
//     keys: [
//       '4Z1aDwt6Q0Dfm9Jbjdo9TA==','yY7/BbtoBarNsH5Z1oy7fA==','K9xhZmT74waPwYuYS2AsvA==','7c23V75daGdoQxNxsuex2A=='
//       ],
//   },
//   url: 'http://localhost:1337'
// });
