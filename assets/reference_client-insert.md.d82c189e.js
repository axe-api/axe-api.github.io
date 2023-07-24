import{_ as s,o as n,c as a,V as o}from"./chunks/framework.ce0d00f7.js";const C=JSON.parse('{"title":"insert()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/client-insert.md","filePath":"reference/client-insert.md"}'),e={name:"reference/client-insert.md"},l=o(`<h1 id="insert" tabindex="-1"><code>insert()</code> <a class="header-anchor" href="#insert" aria-label="Permalink to &quot;\`insert()\`&quot;">​</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api-client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resource</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Karl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Popper</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><ul><li><code>data</code>: The data object that you want to insert.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should call the <code>resource(url: string)</code> function before using this function.</p></div>`,4),t=[l];function p(c,r,i,D,y,F){return n(),a("div",null,t)}const d=s(e,[["render",p]]);export{C as __pageData,d as default};
