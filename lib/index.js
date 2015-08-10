/**
 * bud for coz
 * @module coz-bud
 * @version 1.0.0
 */

"use strict";


var Bud = require('./bud'),
    create = require('./create');

var bud = function(config){
    return create(config);
};

bud.create = create;
bud.Bud = bud;

module.exports = bud;
