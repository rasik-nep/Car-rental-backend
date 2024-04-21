'use strict';

/**
 * available-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-car.available-car');
