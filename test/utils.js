var path = require('path')
var fs = require('fs')

var utils = {
  getTestCase: function (theme) {
    var file = fs.readFileSync(path.resolve(__dirname, 'index.md'), 'utf-8')
    var source = file.replace(/@theme/g, theme)
    var blocks = source.split(/\s@title/g)
    var tests = blocks.map(function (block, index) {
      var a = block.split('@output')
      var output = a[1].trim()
      var b = a[0].split('@input')
      var input = b[1].trim()
      var title = b[0].replace('@title ', '').trim()
      return {
        title: title,
        input: input,
        output: output
      }
    })
    return tests
  }
}

module.exports = utils