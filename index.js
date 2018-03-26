var path = require('path')
var switchSlash = require('switch-slash')

function fullPath (dir, file) {
  return path.join(dir, file)
}

function getAbsPath (dir, arr) {
  var chunk = []
  for (var i = 0; i < arr.length; i++){
    chunk.push(fullPath(dir, arr[i]))
  }
  return chunk.map(function (absPath) {
    return switchSlash(absPath)
  })
}

module.exports = getAbsPath
