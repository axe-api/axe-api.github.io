import{_ as s,o as n,c as a,V as e}from"./chunks/framework.c4102992.js";const h=JSON.parse('{"title":"Model.hiddens()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/model-hiddens.md","filePath":"reference/model-hiddens.md"}'),o={name:"reference/model-hiddens.md"},l=e(`<h1 id="model-hiddens" tabindex="-1">Model.<code>hiddens()</code> <a class="header-anchor" href="#model-hiddens" aria-label="Permalink to &quot;Model.\`hiddens()\`&quot;">​</a></h1><p>You may want to hide some columns in your API results when you have some sensitive information such as password hash. In this case, you should use the following getters to define which columns will be hide;</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Model</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">hiddens</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password_hash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This definition will be used for all queries, even recursive queries too. You can check the <strong>Queries</strong> section to learn more about queries.</p></div>`,4),p=[l];function t(c,r,i,d,y,D){return n(),a("div",null,p)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};
