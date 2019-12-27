
module.exports = function themePlugin (md, options = {}) {
  var theme = options.theme
  var alias = options.alias
  if (!theme) return

  function getAliasClass (tag) {
    if (typeof alias !== 'function') return ''
    var cls = alias(theme, tag)
    return cls
  }

  function setClass (token) {
    var tag = token.type === 'code_block' ? 'pre' : token.tag
    var valid = tag && typeof token.attrGet === 'function' && typeof token.attrJoin === 'function' && token.nesting > -1
    if (!valid) return

    var isSetTheme = (token.attrGet('class') || '').indexOf(theme) === -1
    if (isSetTheme) {
      token.attrJoin('class', theme)
    }

    var tagAlias = getAliasClass(tag)
    var isSetAlias = tagAlias && (token.attrGet('class') || '').indexOf(tagAlias) === -1
    if (isSetAlias) {
      token.attrJoin('class', tagAlias)
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
        var tagAlias = getAliasClass(tag)
        var cls = [theme, tagAlias].filter(c => c).join(' ')
        return prevRule.apply(this, arguments)
          .replace('<' + tag + '>', '<' + tag + ' class="' + cls + '">')
      }
      newRuleFence.__theme_wrapped__ = true
      md.renderer.rules[rule] = newRuleFence
    }
  }

  wrapRule('fence', 'pre')
  wrapRule('code_block', 'code')
}
