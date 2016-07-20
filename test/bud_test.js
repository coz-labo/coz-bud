/**
 * Test case for module:leaf/lib/bud.Bud
 * Runs with mocha.
 */

'use strict'

const Bud = require('../lib/bud.js')
const assert = require('assert')

it('Create bud config.', (done) => {
  let config = new Bud({
    path: 'foo/bar'
  })
  assert.ok(config)
  let config2 = new Bud(config)
  assert.ok(config2)
  done()
})

