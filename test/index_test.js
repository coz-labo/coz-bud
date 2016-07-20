/**
 * Test for index.
 * Runs with mocha.
 */

'use strict'

const index = require('../lib/index.js')
const assert = require('assert')

it('Eval properties.', (done) => {
  assert.ok(index)
  assert.equal(typeof index, 'function')
  assert.ok(index.create)
  assert.ok(index.Bud)
  done()
})
