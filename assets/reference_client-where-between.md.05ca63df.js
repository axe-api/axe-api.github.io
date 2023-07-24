import{_ as s,o as e,c as a,V as n}from"./chunks/framework.ce0d00f7.js";const F=JSON.parse('{"title":"whereBetween()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-where-between.md","filePath":"reference/client-where-between.md"}'),l={name:"reference/client-where-between.md"},o=n('<h1 id="wherebetween" tabindex="-1"><code>whereBetween()</code> <a class="header-anchor" href="#wherebetween" aria-label="Permalink to &quot;`whereBetween()`&quot;">​</a></h1><p>You can use the <code>whereBetween()</code> function to filter data with <code>BETWEEN</code> operator. There are different versions of this function.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource()</code> function before using this function.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>paginate()</code> function after using this function.</p></div><h2 id="wherebetween-field-start-end" tabindex="-1"><code>whereBetween(field, start, end)</code> <a class="header-anchor" href="#wherebetween-field-start-end" aria-label="Permalink to &quot;`whereBetween(field, start, end)`&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api-client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resource</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">whereBetween</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">paginate</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><ul><li><code>field</code>: The field name on the resource.</li><li><code>start</code>: The start value.</li><li><code>end</code>: The end value.</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">200</span></span></code></pre></div><h2 id="wherenotbetween-field-start-end" tabindex="-1"><code>whereNotBetween(field, start, end)</code> <a class="header-anchor" href="#wherenotbetween-field-start-end" aria-label="Permalink to &quot;`whereNotBetween(field, start, end)`&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api-client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resource</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">whereNotBetween</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">paginate</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><ul><li><code>field</code>: The field name on the resource.</li><li><code>start</code>: The start value.</li><li><code>end</code>: The end value.</li></ul><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">200</span></span></code></pre></div>',12),t=[o];function p(c,r,i,C,y,D){return e(),a("div",null,t)}const A=s(l,[["render",p]]);export{F as __pageData,A as default};
