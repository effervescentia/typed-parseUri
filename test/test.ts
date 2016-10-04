import test = require('blue-tape');

import parseuri = require('parseuri');

test('parseuri exists', (t) => {
  t.plan(1);
  t.notEqual(parseuri, undefined);
});
