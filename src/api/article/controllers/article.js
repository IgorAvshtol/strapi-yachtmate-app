'use strict';

/**
 *  article controllers
 */

const jwt = require('jsonwebtoken');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  me: async (ctx) => {
    // const token = ctx.cookies.access_token;
    const testToken = process.env.JWT_SECRET_TEST_KEY;
    const key = process.env.JWT_SECRET_KEY;
    const data = jwt.verify(testToken, key);

    if (!testToken) {
      return ctx.send('Error 403');
    } else {
      return ctx.send(data);
    }
  },
  view: async (ctx) => {
    const { id } = ctx.params;

    try {
      const article = await strapi.entityService.findOne('api::article.article', id);
      await strapi.entityService.update('api::article.article', id, {
        data: {
          view: parseInt(article.view) + 1,
        },
      });
    } catch (error) {
      return ctx.send('Error 403');
    }
  },
  like: async (ctx) => {
    // const token = ctx.cookies.access_token;
    const testToken = process.env.JWT_SECRET_TEST_KEY;
    const key = process.env.JWT_SECRET_KEY;
    const data = jwt.verify(testToken, key);
    const { id } = ctx.params;
    const currentUserId = data.id;

    if (!testToken) {
      return ctx.send('Error 403');
    }

    try {
      const article = await strapi.entityService.findOne('api::article.article', id);
      const updatedArticle = await strapi.entityService.update('api::article.article', id, {
        data: {
          hasLiked: article.hasLiked.includes(currentUserId) ? [...article.hasLiked] : [...article.hasLiked, currentUserId],
        },
      });
      return ctx.send(updatedArticle);
    } catch {
      return ctx.send('Error 403');
    }
  },
  unlike: async (ctx) => {
    // const token = ctx.cookies.access_token;
    const testToken = process.env.JWT_SECRET_TEST_KEY;
    const key = process.env.JWT_SECRET_KEY;
    const data = jwt.verify(testToken, key);
    const { id } = ctx.params;
    const currentUserId = data.id;

    if (!testToken) {
      return ctx.send('Error 403');
    }

    try {
      const article = await strapi.entityService.findOne('api::article.article', id);
      const updatedArticle = await strapi.entityService.update('api::article.article', id, {
        data: {
          hasLiked: article.hasLiked.includes(currentUserId)
            ? article.hasLiked.filter(userId => userId !== currentUserId)
            : [...article.hasLiked],
        },
      });
      return ctx.send(updatedArticle);
    } catch (error) {
      return ctx.send('Error 403');
    }
  }
}));
