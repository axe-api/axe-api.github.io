import{_ as e,o as t,c as o,V as s}from"./chunks/framework.c4102992.js";const y=JSON.parse('{"title":"onBeforeForceDelete()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/hooks-events-on-before-force-delete.md","filePath":"reference/hooks-events-on-before-force-delete.md"}'),a={name:"reference/hooks-events-on-before-force-delete.md"},r=s('<h1 id="onbeforeforcedelete" tabindex="-1"><code>onBeforeForceDelete()</code> <a class="header-anchor" href="#onbeforeforcedelete" aria-label="Permalink to &quot;`onBeforeForceDelete()`&quot;">​</a></h1><p>This hook/event is called the before deleting a record.</p><p>It can be used in the <code>FORCE_DELETE</code> handler.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-IT3rP" id="tab-2Rten9x" checked="checked"><label for="tab-2Rten9x">app/v1/Hooks/User/onBeforeForceDelete.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IHookParameter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">parameters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IHookParameter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something in here</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div></div></div><h2 id="ihookparameters" tabindex="-1"><code>IHookParameters</code> <a class="header-anchor" href="#ihookparameters" aria-label="Permalink to &quot;`IHookParameters`&quot;">​</a></h2><p>The following parameters can be used in the hook/event function;</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>request</code></td><td>Request object of <a href="https://expressjs.com/en/4x/api.html#req" target="_blank" rel="noreferrer">Expresss</a></td></tr><tr><td><code>response</code></td><td>Response object of <a href="https://expressjs.com/en/4x/api.html#res" target="_blank" rel="noreferrer">Expresss</a></td></tr><tr><td><code>model</code></td><td>Current model instance. For example; <code>User</code></td></tr><tr><td><code>database</code></td><td>Database connection instance. For example <a href="http://knexjs.org/#Installation-client" target="_blank" rel="noreferrer">Knex.js</a></td></tr><tr><td><code>relation</code></td><td>The relation definition if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>parentModel</code></td><td>The parent model instance if the route is a related route (For example <code>api/v1/users/:userId/posts</code>).</td></tr><tr><td><code>query</code></td><td>The Knex.js&#39; <a href="http://knexjs.org/#Builder-wheres" target="_blank" rel="noreferrer">query instance</a>.</td></tr></tbody></table>',7),n=[r];function l(c,p,d,i,h,f){return t(),o("div",null,n)}const F=e(a,[["render",l]]);export{y as __pageData,F as default};
