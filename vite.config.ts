import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    // Keep chunks small for fast mobile loads
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor from app code
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["@tanstack/react-router"],
          "vendor-ui": ["lucide-react", "@radix-ui/react-accordion"],
        },
      },
    },
    // Compress assets
    assetsInlineLimit: 4096, // inline small assets (<4 KB) as base64
    chunkSizeWarningLimit: 400,
  },
  // Proxy API calls in dev to avoid CORS issues
  server: {
    proxy: {
      "/api": {
        target: "https://api.zoujup.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  // Optimise dev server pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router", "lucide-react"],
  },
});
