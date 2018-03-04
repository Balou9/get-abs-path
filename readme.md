# get-abs-path

[![build status](http://img.shields.io/travis/Balou9/get-abs-path.svg?style=flat)](http://travis-ci.org/Balou9/get-abs-path) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/get-abs-path?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/get-abs-path)

Get absolute path for file names in the specified directory 

## Usage

``` js
var fs = require('fs')
var getAbsPath = require('./index.js')
var dir = 'C:/Users/' || process.cwd()

fs.readdir(dir, function (err, files) {
  if (err) throw err
  console.log(getAbsPath(dir, files))
})
/*...*/
```
## API

### `getAbsPath(dir, arr)`


## License

[MIT](./license.md)
