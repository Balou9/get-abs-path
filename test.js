var tape = require('tape')
var getAbsPath = require('./index.js')
var paths = getAbsPath(['daa.html', 'fzfzz.html', 'pzoed.html'])

tape('Output is', function (t) {
  t.ok(paths, 'is true')
  t.ok(typeof paths, 'type array')
  t.end()
})
