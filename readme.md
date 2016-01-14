# uuid-regexp
> RegExp for finding an RFC4122 compliant UUID in a string.

[![Build Status](http://img.shields.io/travis/wilmoore/uuid-regexp.js.svg)](https://travis-ci.org/wilmoore/uuid-regexp.js) [![Code Climate](https://codeclimate.com/github/wilmoore/uuid-regexp.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/uuid-regexp.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install uuid-regexp --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/uuid-regexp.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/uuid-regexp.svg)](https://www.npmjs.org/package/uuid-regexp) [![NPM downloads](http://img.shields.io/npm/dm/uuid-regexp.svg)](https://www.npmjs.org/package/uuid-regexp) [![David](https://img.shields.io/david/wilmoore/uuid-regexp.js.svg)](https://david-dm.org/wilmoore/uuid-regexp.js)

## API Examples

###### API

```js
var uuid = require('uuid-regexp')

uuid().exec('f47ac10b-58cc-4372-a567-0e02b2c3d479')
//=> [ 'f47ac10b-58cc-4372-a567-0e02b2c3d479', index: 0, input: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' ]

uuid().test('f47ac10b-58cc-4372-a567-0e02b2c3d479')
//=> true

uuid().test('f47ac10b58cc4372a5670e02b2c3d479')
//=> true

uuid().test('F47AC10B58CC4372A5670E02B2C3D479')
//=> true

uuid({ nil: true }).test('00000000-0000-0000-0000-000000000000')
//=> true

uuid().test('00000000-0000-0000-0000-000000000000')
//=> false
```

###### RegExp

```js
var regexp = require('uuid-regexp/regexp')

regexp.versioned.source
//=> '[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}'

regexp.nil.source
//=> '[0]{8}-?[0]{4}-?[0]{4}-?[0]{4}-?[0]{12}'
```

## API

### `uuid(options)`

###### arguments

 - `options.nil (Boolean)` Whether to include the nil/empty UUID pattern. (default: `false`)

###### returns

 - `(RegExp)` RegExp for matching an RFC4122 compliant UUID strings.

## Inspiration

 - [A Universally Unique IDentifier (UUID) URN Namespace]
 - [Universally unique identifier]

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/uuid-regexp.js.svg)](https://github.com/wilmoore/uuid-regexp.js/blob/master/license)

[A Universally Unique IDentifier (UUID) URN Namespace]: http://www.ietf.org/rfc/rfc4122.txt
[Universally unique identifier]: https://en.wikipedia.org/wiki/Universally_unique_identifier
