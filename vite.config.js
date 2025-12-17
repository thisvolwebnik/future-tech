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
