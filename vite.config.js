import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.js",
      name: "wc-clock",
      fileName: "wc-clock",
    },
  },
  server: {
    port: 8080,
  },
  test: {
    root: ".",
    environment: "jsdom",
  },
});
