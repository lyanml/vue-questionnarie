import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('VITE_API_URL:', env.VITE_API_URL)
  console.log('VITE_UPLOADS_URL:', env.VITE_UPLOADS_URL)

  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
        },
        '/uploads': {
          target: env.VITE_UPLOADS_URL,
        },
      },
    },
  }
})
