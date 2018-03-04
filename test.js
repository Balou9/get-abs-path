var tape = require('tape')
var fs = require('fs')
var getAbsPath = require('./index.js')
var dir = process.cwd()

tape('Output is', function (t) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err
    t.ok(getAbsPath(dir, files), 'is true')
    t.ok(typeof getAbsPath(dir, files), 'type array')
    t.end()
  })
})
