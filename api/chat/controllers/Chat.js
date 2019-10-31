'use strict';

/**
 * Chat.js controller
 *
 * @description: A set of functions called "actions" for managing `Chat`.
 */

module.exports = {

  /**
   * Retrieve chat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.chat.search(ctx.query);
    } else {
      return strapi.services.chat.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a chat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.chat.fetch(ctx.params);
  },

  /**
   * Count chat records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.chat.count(ctx.query, populate);
  },

  /**
   * Create a/an chat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.chat.add(ctx.request.body);
  },

  /**
   * Update a/an chat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.chat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an chat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.chat.remove(ctx.params);
  }
};
