import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://munthe.dev",
  integrations: [sitemap(), icon()],
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
