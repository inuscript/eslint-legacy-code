/**
 * @fileoverview find jQuery.extend and notice for use Objec.assign
 * @author inuscript
 * @copyright 2016 inuscript. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function (context) {
    // variables should be defined here

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

  return {
    'CallExpression': function (node) {
            // check is jQuery.extend
      let names = ['$', 'jQuery']
      if (node.callee.type !== 'MemberExpression') {
        return
      }
      console.log(node.callee.type)
      if (names.indexOf(node.callee.object.name) === -1) {
        return
      }
      if (node.callee.property.name !== 'extend') {
        return
      }
      context.report({
        node: node,
        message: 'Use Object.assign instead of jQuery.extend'
      })
    }
        // give me methods

  }
}

module.exports.schema = [
    // fill in your schema
]
