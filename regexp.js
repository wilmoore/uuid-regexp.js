'use strict'

/*!
 * Nil UUID
 * The nil UUID is special form of UUID that is specified to have all 128 bits set to zero.
 */

exports.nil = /[0]{8}-?[0]{4}-?[0]{4}-?[0]{4}-?[0]{12}/

/*!
 * Versioned UUID.
 */

exports.versioned = /[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i
