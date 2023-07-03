import{_ as s,o as a,c as e,V as n}from"./chunks/framework.c4102992.js";const F=JSON.parse('{"title":"Model.handlers()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-handlers.md","filePath":"reference/model-handlers.md"}'),l={name:"reference/model-handlers.md"},o=n(`<h1 id="model-handlers" tabindex="-1">Model.<code>handlers()</code> <a class="header-anchor" href="#model-handlers" aria-label="Permalink to &quot;Model.\`handlers()\`&quot;">​</a></h1><p>Now we can talk about the routing features of models.</p><p>As default, all CRUD routes will be generated for a model definition. But, you can decide what route should be generated for the model with the following definition.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Model</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HandlerTypes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> INSERT</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> SHOW</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UPDATE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PAGINATE </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> HandlerTypes</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">handlers</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">INSERT</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PAGINATE</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>With handlers getter, you can select what kind of behavior will be activated for the model. The code above allows only insert and pagination. With this definition, you will get the following routes only;</p><table><thead><tr><th>HTTP Method</th><th>Url</th><th>Handler</th><th>Behavior</th></tr></thead><tbody><tr><td>GET</td><td><code>api/v1/users</code></td><td>PAGINATE</td><td>Paginating all records</td></tr><tr><td>POST</td><td><code>api/v1/users</code></td><td>INSERT</td><td>Creating a new record</td></tr></tbody></table><p><strong>Handlers</strong> mean what behaviors have does the model. There are very different handlers that models can support. But also, there are many on the roadmap. You can review our the following handlers table;</p><ul><li><code>INSERT</code>: Creating a new record.</li><li><code>PAGINATE</code>: Paginating the all record.</li><li><code>SHOW</code>: Showing one record by id parameter.</li><li><code>UPDATE</code>: Updating the record by id parameter.</li><li><code>DELETE</code>: Deleting the record by id parameter.</li></ul>`,8),t=[o];function p(r,c,d,i,y,D){return a(),e("div",null,t)}const A=s(l,[["render",p]]);export{F as __pageData,A as default};
