import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c4102992.js";const h=JSON.parse('{"title":"Validate your data","description":"","frontmatter":{},"headers":[],"relativePath":"learn/validations.md","filePath":"learn/validations.md"}'),l={name:"learn/validations.md"},o=e(`<h1 id="validate-your-data" tabindex="-1">Validate your data <a class="header-anchor" href="#validate-your-data" aria-label="Permalink to &quot;Validate your data&quot;">​</a></h1><p class="description"> Validating data is a crucial part of APIs to provide well-structured data to clients. Instead of complex solutions, Axe API support well-designed data validation practices. </p><ul class="intro"><li>You will learn</li><li>What is the data validation?</li><li>How to validate your model data?</li><li>How to validate your data for different HTTP methods?</li><li>How do approach validation errors?</li><li>How to add custom validations?</li></ul><h2 id="what-is-the-validation" tabindex="-1">What is the validation? <a class="header-anchor" href="#what-is-the-validation" aria-label="Permalink to &quot;What is the validation?&quot;">​</a></h2><p>In the context of APIs, validation refers to the process of verifying the <em>correctness</em>, <em>integrity</em>, and <em>conformity</em> of data or requests being sent or received through the API.</p><p>API validation typically involves checking the data or parameters against predefined rules or specifications to ensure that they meet the required format, structure, and constraints. This validation can include various aspects such as data type validation, length or size constraints, range checks, pattern matching, and more.</p><p>API validation helps ensure that the API receives valid inputs and rejects or handles any invalid or malformed requests appropriately. It helps maintain the integrity of the system, prevents errors or unexpected behavior, and improves the overall security of the API.</p><p>For example, if an API expects a parameter to be an integer within a certain range, validation would verify if the input is indeed an integer and falls within the specified range. If the input fails the validation, an appropriate error response can be returned to the client, indicating the issue with the input.</p><p>API validation is an essential part of building robust and reliable systems that interact with external applications or services, as it helps enforce data integrity, prevent data corruption, and ensure the smooth functioning of the API.</p><h2 id="model-based-validations" tabindex="-1">Model-based validations <a class="header-anchor" href="#model-based-validations" aria-label="Permalink to &quot;Model-based validations&quot;">​</a></h2><p>Axe API uses <strong><em>model-based</em></strong> validations to create a common validation structure on the data.</p><p>Let&#39;s look at the following example;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--Li7F" id="tab-VfBTroV" checked="checked"><label for="tab-VfBTroV">User.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Model</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Users</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">validations</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      email</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|email|max:255</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      surname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">;</span></span></code></pre></div></div></div><p>By the model definition, data validation rules have been defined on the model. This means the HTTP client will get a validation error if it doesn&#39;t provide the correct information.</p><p>Example cURL request and the response is defined in the following example;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Zd3bs" id="tab-Hz2itHR" checked="checked"><label for="tab-Hz2itHR">cURL</label><input type="radio" name="group-Zd3bs" id="tab-B5kyYiU"><label for="tab-B5kyYiU">HTTP Response</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">curl</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:3000/api/v1/users</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">errors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The email field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The name field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">surname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The surname field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><p>As a developer, you must define your rules and Axe API handles the rest.</p><h2 id="method-based-validations" tabindex="-1">Method-based validations <a class="header-anchor" href="#method-based-validations" aria-label="Permalink to &quot;Method-based validations&quot;">​</a></h2><p>You might need different validation rules for different HTTP methods.</p><p>For example, the email field might be required while creating a new user. But, it might not be required while updating the user. In this case, Axe API allows you to define <strong><em>method-based</em></strong> validation rules.</p><p>Let&#39;s check the following example;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-4olV4" id="tab-aPql4RC" checked="checked"><label for="tab-aPql4RC">User.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Model</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">axe-api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Users</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">validations</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      POST</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">        email</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|email|max:255</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">        surname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      PUT</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        surname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|max:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">;</span></span></code></pre></div></div></div><p>We&#39;ve defined <strong><em>method-based</em></strong> validations for the <code>User</code> model in this example. Axe API validates the data by the HTTP method type by the example model.</p><h2 id="understanding-errors" tabindex="-1">Understanding errors <a class="header-anchor" href="#understanding-errors" aria-label="Permalink to &quot;Understanding errors&quot;">​</a></h2><p>Let&#39;s take the following error message as an example;</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-6e1MM" id="tab-h1n_psF" checked="checked"><label for="tab-h1n_psF">HTTP Response</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">errors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The email field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The name field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">surname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The surname field is required.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><p>Axe API responds to invalid requests with the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400" target="_blank" rel="noreferrer">400 Bad Request</a>. So you can understand if everything is fine by the checking HTTP status code.</p><p>In the response body, you can see the <code>errors</code> property that contains all errors. <code>errors</code> is an object, and each key of that object represents the field name.</p><p>Each field key has a validation error list that describes what kind of errors have occurred.</p><p>Axe API executes all the validation rules on all the fields. So you should be able to see all errors at the same time.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Axe API supports internationalization the of validation errors. You can check the <strong><a href="/learn/i18n.html">Internationalization</a></strong> page to get more information.</p></div><h2 id="custom-validation-rules" tabindex="-1">Custom validation rules <a class="header-anchor" href="#custom-validation-rules" aria-label="Permalink to &quot;Custom validation rules&quot;">​</a></h2><p>Axe API uses <a href="https://github.com/mikeerickson/validatorjs" target="_blank" rel="noreferrer">validatorjs</a> under the hood. You can use all validation rules on that library.</p><p>Nevertheless, basic form validation rules may not be enough to validate all of your data. You can use the <a href="/learn/hooks-and-events.html">hooks</a> to validate the data to your requirements in that case.</p><h2 id="next-step" tabindex="-1">Next step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;Next step&quot;">​</a></h2><p>Validating user data is easy and well-structured in Axe API. Just you need to define validation rules by model or HTTP methods.</p><p>We are going to talk about auto-created API documentation for your APIs.</p>`,37),t=[o];function p(r,i,c,d,D,y){return a(),n("div",null,t)}const u=s(l,[["render",p]]);export{h as __pageData,u as default};
