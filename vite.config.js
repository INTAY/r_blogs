import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/  
export default defineConfig({
  base:'./',
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'Chrome 66'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true
    }),
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ],
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    emptyOutDir: true, // 构建时清空项目
    terserOptions:{
      compress:{
        drop_console: true, // 打包时删除console
        drop_debugger: true, // 打包时删除debugger
        pure_funcs: ['console.log'],
      },
      output: {
        comments: true,
      },
    },
    brotliSize: true,
    chunkSizeWarningLimit: 5000,
    outDir: '../web/static' // 打包后输出的路径
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
