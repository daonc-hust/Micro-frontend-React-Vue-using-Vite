import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vue(),
    federation({
      name: "host-app",
      remotes: {
        todo_components: "http://localhost:4173/assets/remoteEntry.js",
        daonc: 'http://localhost:4174/assets/vuecc.js'
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
