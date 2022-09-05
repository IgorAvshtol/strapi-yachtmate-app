module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
    // keys: env.array('4Z1aDwt6Q0Dfm9Jbjdo9TA==','yY7/BbtoBarNsH5Z1oy7fA==','K9xhZmT74waPwYuYS2AsvA==','7c23V75daGdoQxNxsuex2A=='),
  },
});
