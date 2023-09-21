import{_ as e,o as a,c as o,X as t}from"./chunks/framework.21352381.js";const f=JSON.parse('{"title":"API Specs","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/specifications.md","filePath":"docs/api/specifications.md","lastUpdated":1692275648000}'),s={name:"docs/api/specifications.md"},r=t('<h1 id="api-specs" tabindex="-1">API Specs <a class="header-anchor" href="#api-specs" aria-label="Permalink to &quot;API Specs&quot;">​</a></h1><h2 id="technologies" tabindex="-1">Technologies <a class="header-anchor" href="#technologies" aria-label="Permalink to &quot;Technologies&quot;">​</a></h2><h4 id="programming-language" tabindex="-1">Programming Language <a class="header-anchor" href="#programming-language" aria-label="Permalink to &quot;Programming Language&quot;">​</a></h4><p><strong>Rust</strong> is the programming language of choice for our API, for it&#39;s performance, safety, ecosystem, and interoperability.</p><h4 id="framework" tabindex="-1">Framework <a class="header-anchor" href="#framework" aria-label="Permalink to &quot;Framework&quot;">​</a></h4><p><strong>Axum</strong> is the backend framework we use. Considering it&#39;s backed by tokio, we trust it as a reliable and well-maintained framework to use in our ecosystem.</p><h4 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-label="Permalink to &quot;Database&quot;">​</a></h4><p><strong>MongoDB</strong> is the database we choose to use, as it provides flexibility, it&#39;s document oriented, and scalable. Flexibility is important because we won&#39;t be 100% sure of the database models we want to use at the beginning.</p><h2 id="protocols" tabindex="-1">Protocols <a class="header-anchor" href="#protocols" aria-label="Permalink to &quot;Protocols&quot;">​</a></h2><h4 id="rest" tabindex="-1">REST <a class="header-anchor" href="#rest" aria-label="Permalink to &quot;REST&quot;">​</a></h4><p>REST is the main protocol we use for our API. It&#39;s used for all the CRUD operations, and for the majority of the API.</p><p>JSON is the main format used for the REST API.</p><h4 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h4><p>WebSocket is used for live connections, such as live chat, live notifications, and live updates.</p>',14),i=[r];function n(c,l,h,d,p,m){return a(),o("div",null,i)}const b=e(s,[["render",n]]);export{f as __pageData,b as default};