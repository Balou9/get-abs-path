var path = require('path')

function fullPath (dir, file) {
  return path.join(dir, file)
}

function getAbsPath (dir, arr) {
  var chunk = []
  for (var i = 0; i < arr.length; i++){
    chunk.push(fullPath(dir, arr[i]))
  }
  return chunk
}

module.exports = getAbsPath
