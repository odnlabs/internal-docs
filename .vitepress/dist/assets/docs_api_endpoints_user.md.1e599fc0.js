import{_ as t,o as e,c as d,X as a}from"./chunks/framework.21352381.js";const m=JSON.parse('{"title":"User Endpoints","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/endpoints/user.md","filePath":"docs/api/endpoints/user.md","lastUpdated":1692275648000}'),s={name:"docs/api/endpoints/user.md"},r=a('<h1 id="user-endpoints" tabindex="-1">User Endpoints <a class="header-anchor" href="#user-endpoints" aria-label="Permalink to &quot;User Endpoints&quot;">​</a></h1><h3 id="base-paths" tabindex="-1">Base Paths <a class="header-anchor" href="#base-paths" aria-label="Permalink to &quot;Base Paths&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/users</span></span></code></pre></div><p>All user endpoints require a valid JWT token in the <code>Authorization</code> header.</p><h2 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h2><table><thead><tr><th>Path</th><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>/</code></td><td>GET</td><td>Get all users</td></tr><tr><td><code>/</code></td><td>POST</td><td>Create a new user</td></tr><tr><td><code>/:id</code></td><td>GET</td><td>Get a user by id</td></tr><tr><td><code>/:id</code></td><td>PUT</td><td>Update a user by id</td></tr><tr><td><code>/:id</code></td><td>DELETE</td><td>Delete a user by id</td></tr><tr><td><code>/me</code></td><td>GET</td><td>Get the current user</td></tr><tr><td><code>/me</code></td><td>PUT</td><td>Update the current user</td></tr><tr><td><code>/me</code></td><td>DELETE</td><td>Delete the current user</td></tr><tr><td><code>/me/password</code></td><td>PUT</td><td>Update the current user&#39;s password</td></tr><tr><td><code>/me/password</code></td><td>DELETE</td><td>Delete the current user&#39;s password</td></tr></tbody></table>',6),o=[r];function n(c,i,p,h,l,u){return e(),d("div",null,o)}const E=t(s,[["render",n]]);export{m as __pageData,E as default};