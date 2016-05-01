/**
 * bud for coz
 * @module coz-bud
 * @version 3.0.0
 */

'use strict'


var Bud = require('./bud'),
    create = require('./create')

var lib = create.bind(this)

lib.create = create;
lib.Bud = Bud;

module.exports = lib;
