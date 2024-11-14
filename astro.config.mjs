import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import expressiveCode from "astro-expressive-code";
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config

export default defineConfig({
  site: "https://blog.lmyby.icu",
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    expressiveCode(),
    mdx({
      remarkPlugins: [remarkMath, remarkMermaid], // relevant
      rehypePlugins: [rehypeKatex], // relevant
    }),
    sitemap(),
    tailwind(),
  ],
});