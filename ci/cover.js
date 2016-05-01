#!/usr/bin/env node

/**
 * Measure coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage(
    require.resolve('./test.js'), [], {
      dir: 'coverage'
    })
], true)
