# humanize-proptype

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/humanize-proptype.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/humanize-proptype?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/humanize-proptype.png)](https://travis-ci.org/LingyuCoder/humanize-proptype)
[![Dependency Status](https://david-dm.org/LingyuCoder/humanize-proptype.svg)](https://david-dm.org/LingyuCoder/humanize-proptype)
[![devDependency Status](https://david-dm.org/LingyuCoder/humanize-proptype/dev-status.svg)](https://david-dm.org/LingyuCoder/humanize-proptype#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/humanize-proptype.svg?style=flat-square)](http://npmjs.org/package/humanize-proptype)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/humanize-proptype.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/humanize-proptype.svg?style=flat-square)](https://npmjs.org/package/humanize-proptype)

Convert property type object from react-docgen to humanized string

## Installation

```bash
$ npm install --save humanize-proptype
```

## Usage

```javascript
const humanize = require('humanize-proptype');
humanize({
  name: 'number'
});
// => Number

humanize({
  name: 'array'
});
// => Array

humanize({
  name: 'bool'
});
// => Bool

humanize({
  name: 'func'
});
// => Function

humanize({
  name: 'object'
});
// => Object

humanize({
  name: 'string'
});
// => String

humanize({
  name: 'node'
});
// => Node

humanize({
  name: 'element'
});
// => Element

humanize({
  name: 'instanceOf',
  value: 'Message'
});
// => Class(Message)

humanize({
  name: 'enum',
  value: [{
    value: '\'News\'',
    computed: false
  }, {
    value: '\'Photos\'',
    computed: false
  }]
});
// => 'News' │ 'Photos'

humanize({
  name: 'union',
  value: [{
    name: 'string'
  }, {
    name: 'number'
  }, {
    name: 'instanceOf',
    value: 'Message'
  }]
});
// => String │ Number │ Class(Message)

humanize({
  name: 'arrayOf',
  value: {
    name: 'number'
  }
});
// => Array(Number)

humanize({
  name: 'custom',
  raw: 'React.PropTypes.objectOf(React.PropTypes.number)'
});
// => ObjectOf(Number)

humanize({
  name: 'shape',
  value: {
    color: {
      name: 'string'
    },
    fontSize: {
      name: 'number'
    }
  }
});
/* => 
{
  "color": "String",
  "fontSize": "Number"
} 
*/

humanize({
  name: 'custom',
  raw: 'function(props, propName, componentName) {}'
});
// => Custom(Function)

humanize({
  name: 'union',
  value: [{
    name: 'shape',
    value: {
      color: {
        name: 'string'
      },
      fontSize: {
        name: 'number'
      }
    }
  }, {
    name: 'arrayOf',
    value: {
      name: 'enum',
      value: [{
        value: '\'News\'',
        computed: false
      }, {
        value: '\'Photos\'',
        computed: false
      }]
    }
  }, {
    name: 'instanceOf',
    value: 'Message'
  }]
});
/* => 
{
  "color": "String",
  "fontSize": "Number"
} │ Array('News' │ 'Photos') │ Class(Message) 
*/
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
