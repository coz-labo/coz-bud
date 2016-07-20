/**
 * Utility functions for copying.
 * @module coz-bud/lib/copying
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get copy () { return d(require('./copy')) },
  get fallbackCopy () { return d(require('./fallback_copy')) }
}
