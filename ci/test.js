#!/usr/bin/env node

/**
 * Run tests
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeTesting = require('ape-testing')

apeTasking.runTasks([
  () => apeTesting.runNodeunit('test/*_test.js', {})
], true)