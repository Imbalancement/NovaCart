import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size limit (in KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate node_modules into a vendor chunk
          }
        },
      },
    },
  },
});
