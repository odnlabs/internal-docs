import{_ as t,o as d,c as e,X as r}from"./chunks/framework.21352381.js";const m=JSON.parse('{"title":"User Structures","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/structures/user.md","filePath":"docs/api/structures/user.md","lastUpdated":1692275648000}'),a={name:"docs/api/structures/user.md"},i=r('<h1 id="user-structures" tabindex="-1">User Structures <a class="header-anchor" href="#user-structures" aria-label="Permalink to &quot;User Structures&quot;">​</a></h1><h2 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-label="Permalink to &quot;User&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>The unique ID for the user</td></tr><tr><td>username</td><td>String</td><td>The user&#39;s chosen username</td></tr><tr><td>email</td><td>String</td><td>The user&#39;s email</td></tr><tr><td>password</td><td>String</td><td></td></tr><tr><td>phone_number</td><td>String</td><td></td></tr><tr><td>display_name</td><td>String</td><td></td></tr><tr><td>avatar</td><td>String</td><td></td></tr><tr><td>banner</td><td>String</td><td></td></tr><tr><td>birthday</td><td>Date</td><td></td></tr><tr><td>bio</td><td>String</td><td></td></tr><tr><td>location</td><td>String</td><td></td></tr><tr><td>presence</td><td>Presence</td><td></td></tr><tr><td>verified</td><td>Boolean</td><td></td></tr><tr><td>verifiedAt</td><td>Date</td><td></td></tr><tr><td>accent_color</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>Date</td><td></td></tr><tr><td>updatedAt</td><td>Date</td><td></td></tr></tbody></table><h2 id="presence" tabindex="-1">Presence <a class="header-anchor" href="#presence" aria-label="Permalink to &quot;Presence&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td></td></tr><tr><td>text</td><td>String</td><td></td></tr><tr><td>emoji</td><td>String</td><td></td></tr></tbody></table><h2 id="user-public" tabindex="-1">User (Public) <a class="header-anchor" href="#user-public" aria-label="Permalink to &quot;User (Public)&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td></td></tr><tr><td>username</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>Date</td><td></td></tr><tr><td>updatedAt</td><td>Date</td><td></td></tr></tbody></table><h2 id="user-private" tabindex="-1">User (Private) <a class="header-anchor" href="#user-private" aria-label="Permalink to &quot;User (Private)&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>ObjectId</td><td></td></tr><tr><td>username</td><td>String</td><td></td></tr><tr><td>email</td><td>String</td><td></td></tr><tr><td>verified</td><td>Boolean</td><td></td></tr><tr><td>verifiedAt</td><td>Date</td><td></td></tr><tr><td>createdAt</td><td>Date</td><td></td></tr><tr><td>updatedAt</td><td>Date</td><td></td></tr></tbody></table><h2 id="friendship" tabindex="-1">Friendship <a class="header-anchor" href="#friendship" aria-label="Permalink to &quot;Friendship&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>ObjectId</td><td></td></tr><tr><td>user_id</td><td>ObjectId</td><td></td></tr><tr><td>friend_id</td><td>ObjectId</td><td></td></tr><tr><td>created_at</td><td>Date</td><td></td></tr><tr><td>updated_at</td><td>Date</td><td></td></tr></tbody></table><h2 id="friendship-status" tabindex="-1">Friendship Status <a class="header-anchor" href="#friendship-status" aria-label="Permalink to &quot;Friendship Status&quot;">​</a></h2><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>Pending</td></tr><tr><td>1</td><td>Accepted</td></tr><tr><td>2</td><td>Declined</td></tr><tr><td>3</td><td>Blocked</td></tr></tbody></table><h2 id="direct-message" tabindex="-1">Direct Message <a class="header-anchor" href="#direct-message" aria-label="Permalink to &quot;Direct Message&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>ObjectId</td><td></td></tr><tr><td>sender</td><td>ObjectId</td><td></td></tr><tr><td>recipient</td><td>ObjectId</td><td></td></tr><tr><td>content</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>Date</td><td></td></tr><tr><td>updatedAt</td><td>Date</td><td></td></tr></tbody></table><h2 id="external-platform-connection" tabindex="-1">External Platform Connection <a class="header-anchor" href="#external-platform-connection" aria-label="Permalink to &quot;External Platform Connection&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>ObjectId</td><td></td></tr><tr><td>user</td><td>ObjectId</td><td></td></tr><tr><td>platform</td><td>String</td><td></td></tr><tr><td>token</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>Date</td><td></td></tr><tr><td>updatedAt</td><td>Date</td><td></td></tr></tbody></table>',17),s=[i];function h(n,o,c,l,u,b){return d(),e("div",null,s)}const _=t(a,[["render",h]]);export{m as __pageData,_ as default};