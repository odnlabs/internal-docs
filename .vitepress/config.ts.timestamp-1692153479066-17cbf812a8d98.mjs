// .vitepress/config.ts
import { defineConfig } from "file:///C:/wamp64/www/projects/documentation/node_modules/.pnpm/vitepress@1.0.0-rc.4_@algolia+client-search@4.19.1_search-insights@2.7.0/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  base: "/internal-docs",
  title: "ODN Internal Docs",
  description: "Internal documentation for the Open Dev Net platform.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "General", link: "/docs/general/introduction" },
      { text: "API", link: "/docs/api/specifications" },
      { text: "Web", link: "/docs/web/specifications" },
    ],
    sidebar: [
      {
        text: "General",
        items: [
          { text: "Introduction", link: "/docs/general/introduction" },
          { text: "Team", link: "/docs/general/team" },
          { text: "Site", link: "/docs/general/site" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "Specifications", link: "/docs/api/specifications" },
          {
            text: "Endpoints",
            link: "/docs/api/endpoints/user",
            collapsed: true,
            items: [
              {
                text: "User",
                link: "/docs/api/endpoints/user",
              },
              {
                text: "Guild",
                link: "/docs/api/endpoints/guild",
              },
            ],
          },
          {
            text: "Structures",
            link: "/docs/api/structures/user",
            collapsed: true,
            items: [
              {
                text: "User",
                link: "/docs/api/structures/user",
              },
              {
                text: "Guild",
                link: "/docs/api/structures/guild",
              },
            ],
          },
        ],
      },
      {
        text: "Web",
        items: [
          { text: "Specifications", link: "/docs/web/specifications" },
          {
            text: "Routes",
            link: "/docs/web/routes/user",
            collapsed: true,
            items: [
              {
                text: "User",
                link: "/docs/web/routes/user",
              },
              {
                text: "Guild",
                link: "/docs/web/routes/guild",
              },
            ],
          },
        ],
      },
      {
        text: "Packages",
        items: [
          { text: "API Client", link: "/docs/packages/api-client" },
          {
            text: "ODN UI",
            link: "/docs/packages/odn-ui/overview",
            links: [
              { text: "Overview", link: "/docs/packages/odn-ui/overview" },
              {
                text: "Components",
                link: "/docs/packages/odn-ui/components",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/odnlabs/internal-docs" },
    ],
    search: {
      provider: "local",
    },
  },
  lastUpdated: true,
});
export { config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3YW1wNjRcXFxcd3d3XFxcXHByb2plY3RzXFxcXGRvY3VtZW50YXRpb25cXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcd2FtcDY0XFxcXHd3d1xcXFxwcm9qZWN0c1xcXFxkb2N1bWVudGF0aW9uXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93YW1wNjQvd3d3L3Byb2plY3RzL2RvY3VtZW50YXRpb24vLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL2ludGVybmFsLWRvY3NcIixcbiAgdGl0bGU6IFwiT0ROIEludGVybmFsIERvY3NcIixcbiAgZGVzY3JpcHRpb246IFwiSW50ZXJuYWwgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIE9wZW4gRGV2IE5ldCBwbGF0Zm9ybS5cIixcbiAgaGVhZDogW1tcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9mYXZpY29uLmljb1wiIH1dXSxcbiAgY2xlYW5VcmxzOiB0cnVlLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286IFwiL2xvZ28ucG5nXCIsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiBcIkhvbWVcIiwgbGluazogXCIvXCIgfSxcbiAgICAgIHsgdGV4dDogXCJHZW5lcmFsXCIsIGxpbms6IFwiL2RvY3MvZ2VuZXJhbC9pbnRyb2R1Y3Rpb25cIiB9LFxuICAgICAgeyB0ZXh0OiBcIkFQSVwiLCBsaW5rOiBcIi9kb2NzL2FwaS9zcGVjaWZpY2F0aW9uc1wiIH0sXG4gICAgICB7IHRleHQ6IFwiV2ViXCIsIGxpbms6IFwiL2RvY3Mvd2ViL3NwZWNpZmljYXRpb25zXCIgfSxcbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkdlbmVyYWxcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiSW50cm9kdWN0aW9uXCIsIGxpbms6IFwiL2RvY3MvZ2VuZXJhbC9pbnRyb2R1Y3Rpb25cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJUZWFtXCIsIGxpbms6IFwiL2RvY3MvZ2VuZXJhbC90ZWFtXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiU2l0ZVwiLCBsaW5rOiBcIi9kb2NzL2dlbmVyYWwvc2l0ZVwiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkFQSVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogXCJTcGVjaWZpY2F0aW9uc1wiLCBsaW5rOiBcIi9kb2NzL2FwaS9zcGVjaWZpY2F0aW9uc1wiIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJFbmRwb2ludHNcIixcbiAgICAgICAgICAgIGxpbms6IFwiL2RvY3MvYXBpL2VuZHBvaW50cy91c2VyXCIsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJVc2VyXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvZG9jcy9hcGkvZW5kcG9pbnRzL3VzZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiR3VpbGRcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL2FwaS9lbmRwb2ludHMvZ3VpbGRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlN0cnVjdHVyZXNcIixcbiAgICAgICAgICAgIGxpbms6IFwiL2RvY3MvYXBpL3N0cnVjdHVyZXMvdXNlclwiLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiVXNlclwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2RvY3MvYXBpL3N0cnVjdHVyZXMvdXNlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJHdWlsZFwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2RvY3MvYXBpL3N0cnVjdHVyZXMvZ3VpbGRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiV2ViXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlNwZWNpZmljYXRpb25zXCIsIGxpbms6IFwiL2RvY3Mvd2ViL3NwZWNpZmljYXRpb25zXCIgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlJvdXRlc1wiLFxuICAgICAgICAgICAgbGluazogXCIvZG9jcy93ZWIvcm91dGVzL3VzZXJcIixcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlVzZXJcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9kb2NzL3dlYi9yb3V0ZXMvdXNlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJHdWlsZFwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2RvY3Mvd2ViL3JvdXRlcy9ndWlsZFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHRleHQ6IFwiUGFja2FnZXNcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiQVBJIENsaWVudFwiLCBsaW5rOiBcIi9kb2NzL3BhY2thZ2VzL2FwaS1jbGllbnRcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJPRE4gVUlcIiwgbGluazogXCIvZG9jcy9wYWNrYWdlcy9vZG4tdWkvb3ZlcnZpZXdcIiwgbGlua3M6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2RvY3MvcGFja2FnZXMvb2RuLXVpL292ZXJ2aWV3J30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb21wb25lbnRzJywgbGluazogJy9kb2NzL3BhY2thZ2VzL29kbi11aS9jb21wb25lbnRzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIF0gfSxcbiAgICAgICAgICBcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL29kbmxhYnMvaW50ZXJuYWwtZG9jc1wiIH0sXG4gICAgXSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcbiAgICB9LFxu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
