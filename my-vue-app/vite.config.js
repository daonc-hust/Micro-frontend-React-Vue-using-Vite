import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: ["chrome89", "edge89", "firefox89", "safari15"],
    },
    plugins: [
        vue(),
        federation({
            name: "vuecc",
            filename: "vuecc.js",
            // Modules to expose
            exposes: {
                // "./App": "./src/App.vue",
                "./Main": "./src/main.js"
            },
            shared: ["vue"],
        }),
    ],
})
