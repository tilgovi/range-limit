# Range Limit

[![Build Status](https://travis-ci.org/tilgovi/range-limit.svg)](https://travis-ci.org/tilgovi/range-limit)

This module exposes a single function, `limit(range, bounds)`, that limits the
`Range` to the contents of `bounds`, a `Node`.

## Example

```javascript
var limit = require('range-limit');
var article = document.getElementsByTagName('article');
var range = window.getSelection().getRangeAt(0);
limit(range, article);
```
