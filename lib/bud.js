/**
 * Bud constructor.
 * A bud contains file meta data like witch template to use, where to render it, what permission to give, and so on.
 * @memberof module:coz-bud/lib
 * @inner
 * @constructor Bud
 * @param {object} config - Bud configuration.
 * @param {string|object} [config.engine='handlebars'] - Template engine name or engine itself.
 * @param {string} [config.cwd=process.cwd()] - Working directory path.
 * @param {object} config.data - Data which template render with.
 * @param {boolean} [config.mkdirp] - Make parent directories if needed.
 * @param {object} [config.setup] - Optional settings for template engine.
 * @param {boolean} [config.force=false] - Should overwrite file when already exists, or not.
 * @param {string|number} [config.mode='644'] - Permission of generated files. (eg., &#x27;444&#x27; for readonly files).
 * @param {string} [config.path] - Destination file path. If not provided, guess from bud file path.
 * @param {string|function} config.tmpl='json' - Template file path or registered template name or template function.
 */

'use strict'

const copying = require('./copying')
const assert = require('assert')

/** @lends Bud */
function Bud (config) {
  copying.copy(config, this)
  copying.fallbackCopy(Bud.defaults, this)
  this.validate()
}

Bud.prototype = {
  /**
   * Template engine name or engine itself
   * @type {string|object}
   */
  engine: 'handlebars',
  /**
   * Working directory path
   * @type {string}
   */
  cwd: process.cwd(),
  /**
   * Data which template render with
   * @type {object}
   */
  data: undefined,
  /**
   * Done to writeout or not
   * @type {boolean}
   */
  done: undefined,
  /**
   * Make parent directories if needed
   * @type {boolean}
   */
  mkdirp: undefined,
  /**
   * Optional settings for template engine
   * @type {object}
   */
  setup: undefined,
  /**
   * Should overwrite file when already exists, or not
   * @type {boolean}
   */
  force: false,
  /**
   * Permission of generated files. (eg., &#x27;444&#x27; for readonly files)
   * @type {string|number}
   */
  mode: '644',
  /**
   * Destination file path. If not provided, guess from bud file path
   * @type {string}
   */
  path: undefined,
  /**
   * Bud source file path
   * @type {string}
   */
  src: undefined,
  /**
   * Template file path or registered template name or template function
   * @type {string|function}
   */
  tmpl: 'json',
  /**
   * Validate this configuration.
   * @throws Will throw an error if configuration invalid.
   */
  validate () {
    const _assertType = (value, type, msg) => {
      if (typeof value === 'undefined') {
        return
      }
      const valid = !!~type.split(/\|/g).indexOf(typeof(value))
      assert(valid, msg)
    }

    _assertType(this.engine, 'string|object', 'bud.engine should be string|object.')
    _assertType(this.cwd, 'string', 'bud.cwd should be string.')
    _assertType(this.data, 'object', 'bud.data should be object.')
    _assertType(this.done, 'boolean', 'bud.done should be boolean.')
    _assertType(this.mkdirp, 'boolean', 'bud.mkdirp should be boolean.')
    _assertType(this.setup, 'object', 'bud.setup should be object.')
    _assertType(this.force, 'boolean', 'bud.force should be boolean.')
    _assertType(this.mode, 'string|number', 'bud.mode should be string|number.')
    _assertType(this.path, 'string', 'bud.path should be string.')
    _assertType(this.src, 'string', 'bud.src should be string.')
    _assertType(this.tmpl, 'string|function', 'bud.tmpl should be string|function.')
  }
}

module.exports = Bud
