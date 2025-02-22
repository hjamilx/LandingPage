import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress" }) // Use Brotli or change to "gzip"
  ],
  build: {
    minify: "terser", // This will minify JavaScript files
    treeShaking: true, // Removes unused JS
    sourcemap: false, // Reduces build size
  rollupOptions: {
      treeshake: true, // Removes unused JS
  }
  },
  base: '/', // Ensures proper routing for deployment
});
