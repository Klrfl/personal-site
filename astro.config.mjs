import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://munthe.dev",
  integrations: [sitemap(), icon(), mdx()],
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});