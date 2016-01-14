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
 * @param {Boolean} [opts.global]
 * Whether the RegExp should test against all possible matches in a string, or only against the first.
 *
 * @param {Boolean} [opts.nil]
 * Whether to include the nil/empty UUID pattern.
 *
 * @return {RegExp}
 * RegExp for finding an RFC4122 compliant UUID in a string.
 */

function re (opts) {
  return new RegExp(
    format('\\b(?:%s)\\b', regexp.versioned.source + ((opts || {}).nil ? '|' + regexp.nil.source : '')),
    (opts || {}).global ? 'gi' : 'i'
  )
}
