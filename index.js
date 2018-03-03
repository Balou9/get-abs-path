var path = require('path')

function fullPath (file) {
  return path.join(process.cwd(), '\/', file)
}

function getAbsPath (arr) {
  var chunk = []
  for (var i = 0; i < arr.length; i++){
    chunk.push(fullPath(arr[i]))
  }
  return chunk
}

module.exports = getAbsPath
