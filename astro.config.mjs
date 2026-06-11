import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// If you rename the GitHub repo, change `base` to match: '/<repo-name>'.
// When the site later moves to a custom domain (e.g. lab.econschool.in),
// set base: '/' and site to the new domain.
export default defineConfig({
  site: 'https://amitkumargoyal.github.io',
  base: '/econschool-lab',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
