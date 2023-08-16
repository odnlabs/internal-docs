import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        ],
      },
      {
        text: "API",
        items: [
          { text: "Specifications", link: "/docs/api/specifications" },
          {
            text: "Endpoints",
            link: "/docs/api/endpoints/user",
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
