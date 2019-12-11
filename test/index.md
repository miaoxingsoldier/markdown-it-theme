@title h1
@input
# This is an H1
@output
<h1 class="@theme">This is an H1</h1>

@title h2
@input
## This is an H2
@output
<h2 class="@theme">This is an H2</h2>

@title h3
@input
### This is an H3
@output
<h3 class="@theme">This is an H3</h3>

@title h4
@input
#### This is an H4
@output
<h4 class="@theme">This is an H4</h4>

@title h5
@input
##### This is an H5
@output
<h5 class="@theme">This is an H5</h5>

@title h6
@input
###### This is an H6
@output
<h6 class="@theme">This is an H6</h6>

@title paragraph
@input
This is paragraph
@output
<p class="@theme">This is paragraph</p>

@title blockquote
@input
> This is a blockquote
@output
<blockquote class="@theme">
<p class="@theme">This is a blockquote</p>
</blockquote>

@title ul width *
@input
* Red
* Green
* Blue
@output
<ul class="@theme">
<li class="@theme">Red</li>
<li class="@theme">Green</li>
<li class="@theme">Blue</li>
</ul>

@title ul with +
@input
+ Red
+ Green
+ Blue
@output
<ul class="@theme">
<li class="@theme">Red</li>
<li class="@theme">Green</li>
<li class="@theme">Blue</li>
</ul>

@title ul with -
@input
- Red
- Green
- Blue
@output
<ul class="@theme">
<li class="@theme">Red</li>
<li class="@theme">Green</li>
<li class="@theme">Blue</li>
</ul>

@title ol
@input
1. Bird
2. McHale
3. Parish
@output
<ol class="@theme">
<li class="@theme">Bird</li>
<li class="@theme">McHale</li>
<li class="@theme">Parish</li>
</ol>

@title indent code block
@input
This is a code block

    tell application "Foo"
        beep
    end tell
@output
<p class="@theme">This is a code block</p>
<pre class="@theme"><code class="@theme">tell application &quot;Foo&quot;
    beep
end tell</code></pre>

@title fenced code block
@input
```javascript
function test() {
	console.log("Hello world!");
}
```
@output
<pre class="@theme"><code class="@theme language-javascript">function test() {
	console.log(&quot;Hello world!&quot;);
}
</code></pre>

@title horizontal rule with * * *
@input
* * *
@output
<hr class="@theme">

@title horizontal rule with ***
@input
***
@output
<hr class="@theme">

@title horizontal rule with *****
@input
*****
@output
<hr class="@theme">

@title horizontal rule with - - -
@input
- - -
@output
<hr class="@theme">

@title horizontal rule with ---------------------------------------
@input
---------------------------------------
@output
<hr class="@theme">

@title emphasis with *
@input
*single asterisks*
@output
<p class="@theme"><em class="@theme">single asterisks</em></p>

@title emphasis with _
@input
_single underscores_
@output
<p class="@theme"><em class="@theme">single underscores</em></p>

@title emphasis with **
@input
**double asterisks**
@output
<p class="@theme"><strong class="@theme">double asterisks</strong></p>

@title emphasis with __
@input
__double underscores__
@output
<p class="@theme"><strong class="@theme">double underscores</strong></p>

@title code
@input
Use the `printf()` function.
@output
<p class="@theme">Use the <code class="@theme">printf()</code> function.</p>

@title strikethrough
@input
~~strikethrough~~
@output
<p class="@theme"><s class="@theme">strikethrough</s></p>

@title image
@input
![Alt text](/path/to/img.jpg)
@output
<p class="@theme"><img src="/path/to/img.jpg" alt="Alt text" class="@theme"></p>

@title link
@input
This is [an example](http://example.com/ "Title") inline link.
@output
<p class="@theme">This is <a href="http://example.com/" title="Title" class="@theme">an example</a> inline link.</p>

@title automatic link
@input
<http://example.com/>
@output
<p class="@theme"><a href="http://example.com/" class="@theme">http://example.com/</a></p>

@title table
@input
| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |
@output
<table class="@theme">
<thead class="@theme">
<tr class="@theme">
<th class="@theme">项目</th>
<th style="text-align:right" class="@theme">价格</th>
<th style="text-align:center" class="@theme">数量</th>
</tr>
</thead>
<tbody class="@theme">
<tr class="@theme">
<td class="@theme">计算机</td>
<td style="text-align:right" class="@theme">$1600</td>
<td style="text-align:center" class="@theme">5</td>
</tr>
<tr class="@theme">
<td class="@theme">手机</td>
<td style="text-align:right" class="@theme">$12</td>
<td style="text-align:center" class="@theme">12</td>
</tr>
<tr class="@theme">
<td class="@theme">管线</td>
<td style="text-align:right" class="@theme">$1</td>
<td style="text-align:center" class="@theme">234</td>
</tr>
</tbody>
</table>