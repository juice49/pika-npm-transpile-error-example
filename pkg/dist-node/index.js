'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var got = _interopDefault(require('got'));

(async () => {
  const res = await got('https://daringfireball.net');
  console.log(res.body);
})();
