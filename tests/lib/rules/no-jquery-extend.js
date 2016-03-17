/**
 * @fileoverview find jQuery.extend and notice for use Objec.assign
 * @author inuscript
 * @copyright 2016 inuscript. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/no-jquery-extend')
let RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-jquery-extend', rule, {

  valid: [
    { code: 'Object.assign(objA, objB)' },
    { code: '_.extend(objA, objB)' }
  ],

  invalid: [
    {
      code: '$.extend(objA, objB)',
      errors: [{
        message: 'Use Object.assign instead of jQuery.extend',
        type: 'CallExpression'
      }]
    },
    {
      code: 'jQuery.extend(objA, objB)',
      errors: [{
        message: 'Use Object.assign instead of jQuery.extend',
        type: 'CallExpression'
      }]
    }
  ]
})
