// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true, // ✅ This makes refresh and direct URLs work!
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  base: '/', // ✅ Only keep this if deploying to root (e.g., not GitHub Pages)
});

