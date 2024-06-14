import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kazizi.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    }
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});


