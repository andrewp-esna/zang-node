'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef HttpMethod
 * @enum {string}
 */
const values = {
    POST: 'POST',
    GET: 'GET'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;