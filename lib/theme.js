
module.exports = function themePlugin (md, options = {}) {
  var theme = options.theme
  if (!theme) return

  function setClass (token) {
    var valid = token.tag && typeof token.attrGet === 'function' && typeof token.attrJoin === 'function' && token.nesting > -1
    if (!valid) return

    var isSetTheme = (token.attrGet('class') || '').indexOf(theme) === -1
    if (isSetTheme) {
      token.attrJoin('class', theme)
    }
  }

  function addThemeClass (token) {
    setClass(token)

    if (!token.children) return
    token.children.forEach(c => {
      addThemeClass(c)
    })
  }

  function travelToken (state) {
    var tokens = state.tokens

    tokens.forEach(token => {
      addThemeClass(token)
    })
  }

  md.core.ruler.push('theme_customize', travelToken)

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
