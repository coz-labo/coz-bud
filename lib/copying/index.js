/**
 * Utility functions for copying.
 * @module coz-bud/lib/copying
 */

'use strict'


const copy = require('./copy')
const fallbackCopy = require('./fallback_copy')

exports.copy = copy
exports.fallbackCopy = fallbackCopy

module.exports = {
  copy,
  fallbackCopy
}
