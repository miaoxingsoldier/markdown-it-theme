/* eslint-env jest */

var MarkdownIt = require('markdown-it')
var themePlugin = require('../lib/theme.js')
var utils = require('./utils.js')

describe('markdown-it-theme', () => {
  var theme = 'custom-md-theme'
  var md = new MarkdownIt()
    .use(themePlugin, {
      theme: theme
    })

  var testcases = utils.getTestCase(theme)
  testcases.forEach(testcase => {
    it(testcase.title, () => {
      var result = md.render(testcase.input)
      expect(result.trim()).toBe(testcase.output)
    })
  })
})
