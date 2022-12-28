import{_ as s,c as a,o as n,a as e}from"./app.9d2350d3.js";const u=JSON.parse('{"title":"Internationalization (i18n)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Setting the current language","slug":"setting-the-current-language","link":"#setting-the-current-language","children":[]},{"level":2,"title":"Current Language","slug":"current-language","link":"#current-language","children":[]},{"level":2,"title":"Form validation messages","slug":"form-validation-messages","link":"#form-validation-messages","children":[]},{"level":2,"title":"HTTP Response","slug":"http-response","link":"#http-response","children":[]},{"level":2,"title":"System Messages","slug":"system-messages","link":"#system-messages","children":[]}],"relativePath":"advanced/i18n.md","lastUpdated":1672242464000}'),l={name:"advanced/i18n.md"},o=e(`<h1 id="internationalization-i18n" tabindex="-1">Internationalization (i18n) <a class="header-anchor" href="#internationalization-i18n" aria-hidden="true">#</a></h1><p>Axe API provides the fundamentals of internationalization (<code>i18n</code>) by handling the current language selection process.</p><p>Since Axe API is Rest API Framework, it does NOT have any user-related content except form validation messages. As the Axe API Core Team, we believe that giving developers freedom is more important than building an all-in-one framework.</p><p>In this section, you may find everything about internationalization.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>As a developer, you are able to define which languages are supported in the <code>Config/Application.ts</code> file, with the <code>default language</code> like the following example.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IApplicationConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...other configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">supportedLanguages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-GB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">de</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">defaultLanguage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-GB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You should use the <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank" rel="noreferrer">ISO 639-1 Standard</a> in configurations.</p></div><p>You should pick a default language, and also the supported languages as an array.</p><h2 id="setting-the-current-language" tabindex="-1">Setting the current language <a class="header-anchor" href="#setting-the-current-language" aria-hidden="true">#</a></h2><p>Clients are able to select the preferred languages by <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language" target="_blank" rel="noreferrer">Accept-Language</a> request HTTP header. Please check the following example out.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">Accept-Language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5</span></span>
<span class="line"></span></code></pre></div><p>Basically, we define that to see the content in <code>fr-CH</code> (Swiss French) with this HTTP Header. Also, the client is accepting to see the content in any other language in case <code>fr-CH</code> is not supported by the API. <code>q=</code> parameter is refer to priority.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find more in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language" target="_blank" rel="noreferrer">Accept-Language</a> documentation.</p></div><p>Axe API analyzes the <code>Accept-Language</code> HTTP header and decides in which language the content will be presented. Also, it uses the <code>defaultLanguage</code> value if there is no matched language between the client and the server.</p><p>This is a very efficient way to determine which language will be used with the HTTP context.</p><h2 id="current-language" tabindex="-1">Current Language <a class="header-anchor" href="#current-language" aria-hidden="true">#</a></h2><p>Axe API carries the <code>currentLanguage</code> value in all HTTP Request-Response cycles. Anywhere in the code, you can access the <code>currentLanguage</code> value via <code>Express.Request</code> object.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IHookParameter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onBeforeInsert </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IHookParameter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentLanguage</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onBeforeInsert</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>The <code>currentLanguage</code> type is look like the following interface;</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ILanguage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Full title of the language code, en-GB</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Short title of the language code: en</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">region</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Regional title of the language code: GB</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can import this interface from <code>axe-api</code> like the folowing example;</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ILanguage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span></code></pre></div></div><h2 id="form-validation-messages" tabindex="-1">Form validation messages <a class="header-anchor" href="#form-validation-messages" aria-hidden="true">#</a></h2><p>As a developer, you don&#39;t have to do anything for the form validation messages. <code>i18n</code> structure works perfectly with form validation messages. The form validation message language will be set automatically by the client&#39;s HTTP Request Header.</p><p>For example, if you want to support German in your application, you should configure your files like the following examples;</p><p><code>app/Config/Application.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IApplicationConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...other configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">supportedLanguages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">de</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">defaultLanguage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>The form validation messages will be shown in <strong>German</strong> if the client sends an HTTP request like the following one;</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">curl</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;name&quot;: &quot;&quot;, &quot;surname&quot;:&quot;&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Accept-Language: de</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:</span><span style="color:#F78C6C;">3000</span><span style="color:#C3E88D;">/api/users</span></span>
<span class="line"></span></code></pre></div><p>This is the HTTP response example;</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">errors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Das email Feld muss ausgefüllt sein.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Das name Feld muss ausgefüllt sein.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">surname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Das surname Feld muss ausgefüllt sein.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can find all the supported languages from <a href="https://github.com/mikeerickson/validatorjs" target="_blank" rel="noreferrer">validatorjs</a> via <a href="https://github.com/mikeerickson/validatorjs/tree/master/src/lang" target="_blank" rel="noreferrer">here</a>.</p></div><h2 id="http-response" tabindex="-1">HTTP Response <a class="header-anchor" href="#http-response" aria-hidden="true">#</a></h2><p>Axe API adds the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language" target="_blank" rel="noreferrer">Content-Language</a> HTTP headers to the responses.</p><p>This is an example result;</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">Content-Language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">en-GB</span></span>
<span class="line"></span></code></pre></div><p>You can use this value to understand which language has been selected as the language in an HTTP request.</p><h2 id="system-messages" tabindex="-1">System Messages <a class="header-anchor" href="#system-messages" aria-hidden="true">#</a></h2><p>Axe API may throw many system errors for developers. These messages will not be able to translate due to they are not related to users.</p>`,39),p=[o];function t(r,c,i,y,D,F){return n(),a("div",null,p)}const d=s(l,[["render",t]]);export{u as __pageData,d as default};
