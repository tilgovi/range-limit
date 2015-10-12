# Range Limit

[![Build Status](https://travis-ci.org/tilgovi/range-limit.svg)](https://travis-ci.org/tilgovi/range-limit)
[![Coverage Status](https://coveralls.io/repos/tilgovi/range-limit/badge.svg?branch=master&service=github)](https://coveralls.io/github/tilgovi/range-limit?branch=master)
[![npm](https://img.shields.io/npm/v/range-limit.svg)](https://www.npmjs.com/package/range-limit)

This module exposes a single function, `limit(range, bounds)`, that limits the
`Range` to the contents of `bounds`, a `Node`.

## Example

```javascript
var limit = require('range-limit');
var article = document.getElementsByTagName('article');
var range = window.getSelection().getRangeAt(0);
limit(range, article);
```
