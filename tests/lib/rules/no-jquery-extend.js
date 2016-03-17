/**
 * @fileoverview find jQuery.extend and notice for use Objec.assign
 * @author inuscript
 * @copyright 2016 inuscript. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-jquery-extend"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-jquery-extend", rule, {

    valid: [
        {
            code: "Object.assign(objA, objB)",
        }
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "$.extend(objA, objB)",
            errors: [{
                message: "Use Object.assign instead of jQuery.extend",
                type: "CallExpression"
            }]
        }
    ]
});
