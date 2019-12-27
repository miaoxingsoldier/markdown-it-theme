# markdown-it-theme

> A [markdown-it] plugin for theme customization.

[markdown-it]: https://github.com/markdown-it/markdown-it

## Usage

> index.md

```markdown
# header
markdown-it-theme `plugin`
```

> index.js

```js
var fs = require('fs')
var plugin = require('markdown-it-theme')
var options = { theme: 'custom-md-theme' }
var md = require('markdown-it')().use(plugin, options)
var input = fs.readFileSync('index.md', 'utf-8')
var result = md.render(input)
console.log(result)
```

> Result

```html
<h1 class="custom-md-theme">header</h1>
<p class="custom-md-theme">markdown-it-theme <code class="custom-md-theme">plugin</code> </p>
```

### options

Name              | Type     | Description            | Default
------------------|----------|------------------------|-----------
`theme`           | string   | The class of html tag. | undefined
`alias`           | function | Alias class of html tag. | undefined

#### alias

> index.js

```js
var fs = require('fs')
var plugin = require('markdown-it-theme')
var options = {
  theme: 'custom-md-theme',
  alias: function (theme, tag) {
    return theme + '-' + tag
  }
}
var md = require('markdown-it')().use(plugin, options)
var input = fs.readFileSync('index.md', 'utf-8')
var result = md.render(input)
console.log(result)
```

> Result

```html
<h1 class="custom-md-theme custom-md-theme-h1">header</h1>
<p class="custom-md-theme custom-md-theme-p">markdown-it-theme <code class="custom-md-theme custom-md-theme-code">plugin</code> </p>
```
