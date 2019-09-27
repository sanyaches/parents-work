'use strict';

/**
 * Vote.js controller
 *
 * @description: A set of functions called "actions" for managing `Vote`.
 */

module.exports = {

  /**
   * Retrieve vote records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.vote.search(ctx.query);
    } else {
      return strapi.services.vote.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a vote record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.vote.fetch(ctx.params);
  },

  /**
   * Count vote records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.vote.count(ctx.query, populate);
  },

  /**
   * Create a/an vote record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vote.add(ctx.request.body);
  },

  /**
   * Update a/an vote record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vote.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vote record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vote.remove(ctx.params);
  }
};
