'use strict';

/**
 * Mess.js controller
 *
 * @description: A set of functions called "actions" for managing `Mess`.
 */

module.exports = {

  /**
   * Retrieve mess records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.mess.search(ctx.query);
    } else {
      return strapi.services.mess.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a mess record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.mess.fetch(ctx.params);
  },

  /**
   * Count mess records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.mess.count(ctx.query, populate);
  },

  /**
   * Create a/an mess record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mess.add(ctx.request.body);
  },

  /**
   * Update a/an mess record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mess.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mess record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mess.remove(ctx.params);
  }
};
