'use strict';

/**
 * Photo.js controller
 *
 * @description: A set of functions called "actions" for managing `Photo`.
 */

module.exports = {

  /**
   * Retrieve photo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.photo.search(ctx.query);
    } else {
      return strapi.services.photo.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a photo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.photo.fetch(ctx.params);
  },

  /**
   * Count photo records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.photo.count(ctx.query, populate);
  },

  /**
   * Create a/an photo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.photo.add(ctx.request.body);
  },

  /**
   * Update a/an photo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.photo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an photo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.photo.remove(ctx.params);
  }
};
