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

Name              | Description            | Default
------------------|------------------------|-----------
`theme`           | The class of html tag. | undefined
