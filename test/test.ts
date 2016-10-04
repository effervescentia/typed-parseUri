import test = require('blue-tape');

import parseUri = require('parseUri');

test('parseUri exists', (t) => {
  t.plan(1);
  t.notEqual(parseUri, undefined);
});
