/**
 * Testcase for copying/copy.js
 * Runs with nodeunit.
 */

'use strict'

const copy = require('../lib/copying/copy.js')

exports[ 'Copy an object.' ] = function (test) {
  let obj1 = { foo: 'bar', quz: 'quzz' }
  let obj2 = { foo: 'baz' }
  copy(obj1, obj2)
  test.deepEqual(obj2, {
    foo: 'bar',
    quz: 'quzz'
  })
  test.done()
}