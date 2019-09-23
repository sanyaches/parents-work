'use strict';

/**
 * Tallage.js controller
 *
 * @description: A set of functions called "actions" for managing `Tallage`.
 */

module.exports = {

  /**
   * Retrieve tallage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tallage.search(ctx.query);
    } else {
      return strapi.services.tallage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tallage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tallage.fetch(ctx.params);
  },

  /**
   * Count tallage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.tallage.count(ctx.query, populate);
  },

  /**
   * Create a/an tallage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tallage.add(ctx.request.body);
  },

  /**
   * Update a/an tallage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tallage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tallage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tallage.remove(ctx.params);
  }
};
