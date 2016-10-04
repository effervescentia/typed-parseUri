"use strict";
var test = require('blue-tape');
var parseuri = require('parseuri');
test('parseuri exists', function (t) {
    t.plan(1);
    t.notEqual(parseuri, undefined);
});
