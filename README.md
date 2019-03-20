`@pika/plugin-build-node` transpiles only local modules, not modules imported
from `node_modules`.

This is mostly okay, but it is a problem if we install a module from npm that
ships untranspiled code.

Sindre Sorhus, for example, [does not generally ship transpiled code](https://github.com/sindresorhus/ama/issues/446). Sindre's modules are very ubiquitous.

`@pika/plugin-build-node` aims to transpile code to support node.js 6+. This
example repo uses Sindre's `got` module, which contains an untranspiled object
spread operator. The operator is not supported in node.js 8.0, so the output
bundle does not work.

The build output is included in the repo, so once cloned, run `npm start` to
run the transpiled bundle.

You can rebuild with `npm run dist`.
