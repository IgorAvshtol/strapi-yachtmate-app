'use strict';

/**
 * article router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::article.article');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: 'GET',
    path: '/me',
    handler: 'api::article.article.me',
    config: {
      auth: false
    }
  },
  {
    method: 'PATCH',
    path: '/articles/:id',
    handler: 'api::article.article.view',
    config: {
      auth: false
    }
  },
  {
    method: 'PATCH',
    path: '/articles/:id/favourite',
    handler: 'api::article.article.like',
    config: {
      auth: false
    }
  },
  {
    method: 'DELETE',
    path: '/articles/:id/favourite',
    handler: 'api::article.article.unlike',
    config: {
      auth: false
    }
  }
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
