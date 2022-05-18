import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'https://jsonplaceholder.typicode.com/',
                    changeOrigin: true,
                    ws: true,
                    rewrite: p => p.replace(/^\/api/, '')
                }
            }
        }
    }
});
