import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/internal-docs',
  title: 'ODN Internal Docs',
  description: 'Internal documentation for the Open Dev Net platform.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'General', link: '/docs/general/introduction' },
      { text: 'API', link: '/docs/api/specifications' },
      { text: 'Web', link: '/docs/web/specifications' },
    ],

    sidebar: [
      {
        text: 'General',
        items: [{ text: 'Introduction', link: '/docs/general/introduction' }],
      },
      {
        text: 'API',
        items: [
          { text: 'Specifications', link: '/docs/api/specifications' },
          {
            text: 'Structures',
            link: '/docs/api/structures/user',
            items: [
              {
                text: 'User',
                link: '/docs/api/structures/user',
              },
              {
                text: 'Guild',
                link: '/docs/api/structures/guild',
              },
            ],
          },
        ],
      },
      {
        text: 'Web',
        items: [{ text: 'Specifications', link: '/docs/web/specifications' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/odnlabs/internal-docs' },
    ],
  },
});
