# get-abs-path

[![build status](http://img.shields.io/travis/Balou9/get-abs-path.svg?style=flat)](http://travis-ci.org/Balou9/get-abs-path) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/get-abs-path?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/get-abs-path)

Get absolute path for file names in specified directory

***

## Get it!

```
npm install --save get-abs-path
```

***

## Usage

``` js

var fs = require('fs')
var getAbsPath = require('get-abs-path')
var dir = 'C:/Users/' || process.cwd()

fs.readdir(dir, function (err, data) {
  if (err) throw err
  console.log(getAbsPath(dir, data))
})
```
***

## API

### `getAbsPath(dir, arr)`

***

## License

[MIT](./license.md)

***
