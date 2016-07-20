/**
 * Testcase for copying/copy.js
 * Runs with mocha.
 */

'use strict'

const copy = require('../lib/copying/copy.js')
const assert = require('assert')

it('Copy an object.', (done) => {
  let obj1 = { foo: 'bar', quz: 'quzz' }
  let obj2 = { foo: 'baz' }
  copy(obj1, obj2)
  assert.deepEqual(obj2, {
    foo: 'bar',
    quz: 'quzz'
  })
  done()
})