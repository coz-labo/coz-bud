/**
 * Copy object properties unless defined in destination object.
 * @memberof module:coz-bud/lib/copying
 * @function fallbackCopy
 * @param {object} src - Object to copy from.
 * @param {object?} dest - Object to copy to.
 * @returns {object} - Dest object.
 *
 */

'use strict'

/** @lends fallbackCopy */
function fallbackCopy (src, dest) {
  src = src || {}
  dest = dest || {}
  let keys = Object.keys(src)
  for (let i = 0, len = keys.length; i < len; i++) {
    let key = keys[ i ]
    let val = dest[ key ]
    let shouldCopy = (typeof(val) === 'undefined')
    if (shouldCopy) {
      dest[ key ] = src[ key ]
    }
  }
  return dest
}

module.exports = fallbackCopy
