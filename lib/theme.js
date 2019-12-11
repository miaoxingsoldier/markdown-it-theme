
module.exports = function themePlugin (md, options = {}) {
  var theme = options.theme
  if (!theme) return

  function setThemeClass (p) {
    if (typeof p.attrJoin === 'function' && p.nesting > -1) {
      p.attrJoin('class', theme)
    }
    if (!p.children) return
    p.children.forEach(c => {
      setThemeClass(c)
    })
  }

  function travelToken (state) {
    var tokens = state.tokens

    tokens.forEach(token => {
      setThemeClass(token)
    })
  }

  md.core.ruler.before('linkify', 'theme_customize', travelToken)

  function wrapRule (rule, tag) {
    var prevRule = md.renderer.rules[rule]
    if (typeof prevRule === 'function' && !prevRule.__theme_wrapped__) {
      var newRuleFence = function () {
        return prevRule.apply(this, arguments)
          .replace('<' + tag + '>', '<' + tag + ' class="' + theme + '">')
      }
      newRuleFence.__theme_wrapped__ = true
      md.renderer.rules[rule] = newRuleFence
    }
  }

  wrapRule('fence', 'pre')
  wrapRule('code_block', 'code')
}