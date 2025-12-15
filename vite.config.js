import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        news: resolve(__dirname, "src/pages/news.html"),
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
