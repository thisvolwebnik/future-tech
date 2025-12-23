import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  base: "/future-tech/",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        news: resolve(__dirname, "src/pages/news.html"),
        blog: resolve(__dirname, "src/pages/blog.html"),
        podcasts: resolve(__dirname, "src/pages/podcasts.html"),
        resources: resolve(__dirname, "src/pages/resources.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
  },
});
