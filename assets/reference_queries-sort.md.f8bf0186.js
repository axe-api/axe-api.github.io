import{_ as s,o as e,c as a,V as o}from"./chunks/framework.c4102992.js";const y=JSON.parse('{"title":"sort","description":"","frontmatter":{},"headers":[],"relativePath":"reference/queries-sort.md","filePath":"reference/queries-sort.md"}'),t={name:"reference/queries-sort.md"},n=o('<h1 id="sort" tabindex="-1"><code>sort</code> <a class="header-anchor" href="#sort" aria-label="Permalink to &quot;`sort`&quot;">​</a></h1><p>You may sort your results by your selections for multiple columns;</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api/v1/users?sort=surname,-name</span></span></code></pre></div><p>This request is equal on SQL;</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">surname</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ASC</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DESC</span></span></code></pre></div><p>In this request, <code>-</code> means <code>DESC</code>.</p>',6),r=[n];function l(p,c,i,d,u,C){return e(),a("div",null,r)}const m=s(t,[["render",l]]);export{y as __pageData,m as default};
