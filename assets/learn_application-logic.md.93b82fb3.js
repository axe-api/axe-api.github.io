import{_ as e,o as a,c as t,V as o}from"./chunks/framework.c4102992.js";const u=JSON.parse('{"title":"Application Logic","description":"","frontmatter":{},"headers":[],"relativePath":"learn/application-logic.md","filePath":"learn/application-logic.md"}'),i={name:"learn/application-logic.md"},s=o('<h1 id="application-logic" tabindex="-1">Application Logic <a class="header-anchor" href="#application-logic" aria-label="Permalink to &quot;Application Logic&quot;">​</a></h1><p class="description"> Axe API provides great convenience by creating routes and automatically managing HTTP requests. However, this is not enough for real-world applications, so we need to be able to integrate our own application logic into the API. </p><ul class="intro"><li>You will learn</li><li>What is application logic?</li><li>How to mix automatic and manual operations?</li><li>What tools do you have for application logic?</li></ul><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p><strong><em>Application logic</em></strong> means basically the behavior of the API.</p><p>As developers, we can create many different APIs that have user database tables. Nevertheless, almost every API might act differently in the new user creation process.</p><p>The reason behind it is that almost every API has a different <strong><em>application logic</em></strong>. For example, in an API might check the user&#39;s email address from external resources to validate if the user is a customer of the company&#39;s other database resources. Or, you can send a special welcoming email to the user if they have a special domain email.</p><p>These kinds of additions are designed by the <strong>domain</strong>. There can be very different scenarios for each API&#39;s design. All of the custom scenarios that can not be standardized by Axe API are called <strong>Application Logic</strong>.</p><h2 id="the-axe-api-approach" tabindex="-1">The Axe API approach <a class="header-anchor" href="#the-axe-api-approach" aria-label="Permalink to &quot;The Axe API approach&quot;">​</a></h2><p>Axe API is just a framework that provides handling the <em>best-practices</em> by <em>model definitions</em>. It is <strong>NOT</strong> a <strong><em>no-code</em></strong> or <strong><em>low-code</em></strong> platform.</p><p>As a principle, the Axe API team doesn&#39;t believe that no-code platforms would for specialized applications. But also, we believe that we can provide a basic framework that handles the best-practices.</p><p>Axe API uses some connection points that are coded by yourself while it handles an HTTP request by model definition. By using this method, you are allowed to create an API with minimum effort.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p>Axe API handles HTTP requests <strong><em>automatically</em></strong>. While doing that, it provides many methods that allow you to add your application logic;</p><ul><li>Middlewares</li><li>Hooks</li><li>Serializers</li></ul><p>Before using any of these methods, you should understand the <strong>HTTP Request-Response Cycle</strong> clearly.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In this section, we tried to explain what is application logic.</p><p>In the next section, we are going to talk about the Request-Response cycle.</p>',19),n=[s];function r(l,c,p,h,d,m){return a(),t("div",null,n)}const f=e(i,[["render",r]]);export{u as __pageData,f as default};
