import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [
    analyze(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "OptimizeCloud",
        short_name: "Optimize",
        start_url: "/?utm_source=pwa",
        background_color: "#111317",
        theme_color: "#5A7BE6",
        display: "standalone",
        orientation: "landscape-primary",
        icons: [
          {
            src: "assets/favicon.ico",
            sizes: "512x512",
          },
          {
            src: "/assets/logo/optimizeteam.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/assets/logo/optimizeteam-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/assets/logo/optimizeteam-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/assets/logo/optimizeteam-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/assets/logo/optimizeteam-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/assets/logo/optimizeteam-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/assets/logo/optimizeteam-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
