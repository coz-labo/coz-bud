/**
 * bud for coz
 * @module coz-bud
 * @version 4.0.1
 */

'use strict'

const Bud = require('./bud')
const create = require('./create')

let lib = create.bind(this)

lib.create = create
lib.Bud = Bud

module.exports = lib
