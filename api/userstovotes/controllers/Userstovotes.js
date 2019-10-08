'use strict';

/**
 * Userstovotes.js controller
 *
 * @description: A set of functions called "actions" for managing `Userstovotes`.
 */

module.exports = {

  /**
   * Retrieve userstovotes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.userstovotes.search(ctx.query);
    } else {
      return strapi.services.userstovotes.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a userstovotes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.userstovotes.fetch(ctx.params);
  },

  /**
   * Count userstovotes records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.userstovotes.count(ctx.query, populate);
  },

  /**
   * Create a/an userstovotes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userstovotes.add(ctx.request.body);
  },

  /**
   * Update a/an userstovotes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userstovotes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userstovotes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userstovotes.remove(ctx.params);
  }
};
