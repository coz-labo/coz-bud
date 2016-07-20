/**
 * Testcase for copying/fallback_copy.js
 * Runs with mocha.
 */

'use strict'

const fallbackCopy = require('../lib/copying/fallback_copy.js')
const assert = require('assert')

it('Copy an object.', (done) => {
  var obj1 = { foo: 'bar', quz: 'quzz' },
    obj2 = { foo: 'baz' }
  fallbackCopy(obj1, obj2)
  assert.deepEqual(obj2, {
    foo: 'baz',
    quz: 'quzz'
  })
  done()
})
