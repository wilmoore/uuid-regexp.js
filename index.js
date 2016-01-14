'use strict'

/*!
 * imports.
 */

var format = require('util').format
var regexp = require('./regexp')

/*!
 * exports.
 */

module.exports = re

/**
 * RegExp for finding an RFC4122 compliant UUID in a string.
 *
 * @param {Object} opts
 * Options object.
 *
 * @param {String} [opts.flags]
 * Additional RegExp flags ('i' is always set).
 *
 * @param {Boolean} [opts.nil]
 * Whether to include the nil/empty UUID pattern.
 *
 * @return {RegExp}
 * RegExp for finding an RFC4122 compliant UUID in a string.
 */

function re (opts) {
  opts = opts || {}

  return new RegExp(
    format('\\b(?:%s)\\b', regexp.versioned.source + (opts.nil ? '|' + regexp.nil.source : '')),
    'i' + (opts.flags || '')
  )
}
