import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              /.*\.(png|jpg|jpeg|svg|gif|webp|avif|bmp|ico|tiff|json|woff2?|eot|ttf|otf|webm|mp4|mp3|wav|m4a|aac|oga|ogg|mp3|m4v|pdf|css|js|html)/,
            handler: "CacheFirst",
            options: {
              cacheName: "assets",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        description: "A Progressive Web App built with Vite",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#42b883",
        icons: [
          {
            src: "/i.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/i.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
