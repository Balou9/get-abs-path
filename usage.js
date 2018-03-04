var fs = require('fs')
var getAbsPath = require('./index.js')
var dir = 'C:/Users/' || process.cwd()

fs.readdir(dir, function (err, files) {
  if (err) throw err
  console.log(getAbsPath(dir, files))
})
