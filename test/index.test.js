/* eslint-env jest */

var MarkdownIt = require('markdown-it')
var themePlugin = require('../lib/theme.js')
var utils = require('./utils.js')

describe('markdown-it-theme: theme', () => {
  var theme = 'custom-md-theme'
  var md = new MarkdownIt()
    .use(themePlugin, {
      theme: theme
    })

  var testcases = utils.getTestCase('index.txt', theme)
  testcases.forEach(testcase => {
    it(testcase.title, () => {
      var result = md.render(testcase.input)
      expect(result.trim()).toBe(testcase.output)
    })
  })
})

describe('markdown-it-theme: alias', () => {
  var theme = 'custom-md-theme'
  var md = new MarkdownIt()
    .use(themePlugin, {
      theme: theme,
      alias: function (theme, tag) {
        return theme + '__' + tag
      }
    })

  var testcases = utils.getTestCase('alias.txt', theme)
  testcases.forEach(testcase => {
    it(testcase.title, () => {
      var result = md.render(testcase.input)
      expect(result.trim()).toBe(testcase.output)
    })
  })
})
