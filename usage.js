var fs = require('fs')
var getAbsPath = require('./index.js')
var dir = 'C:/Users/' || process.cwd()

fs.readdir(dir, function (err, data) {
  if (err) throw err
  console.log(getAbsPath(dir, data))
})
