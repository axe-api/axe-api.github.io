import{_ as s,o as a,c as n,V as o}from"./chunks/framework.c4102992.js";const d=JSON.parse('{"title":"ApiError","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api-error.md","filePath":"reference/api-error.md"}'),l={name:"reference/api-error.md"},p=o(`<h1 id="apierror" tabindex="-1"><code>ApiError</code> <a class="header-anchor" href="#apierror" aria-label="Permalink to &quot;\`ApiError\`&quot;">​</a></h1><p>ApiError class is designed to send errors to the HTTP client easily. You can use it in any hooks.</p><p>You can check the following example;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-QGsm9" id="tab-JZ_mHng" checked="checked"><label for="tab-JZ_mHng">app/v1/Hooks/User/onBeforeInsert.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IHookParameter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ApiError</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StatusCodes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">parameters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IHookParameter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ApiError</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is not an acceptable request!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BAD_REQUEST</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div></div></div><p>By this example, you can get the following error in the HTTP response body;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-RBZ-3" id="tab-1Lb9BOT" checked="checked"><label for="tab-1Lb9BOT">cURL Request</label><input type="radio" name="group-RBZ-3" id="tab-WSv02Ra"><label for="tab-WSv02Ra">Response [400]</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:3000/api/v1/users</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is not an acceptable request!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div>`,6),e=[p];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
