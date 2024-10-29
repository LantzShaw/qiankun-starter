import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig(({mode} ) => {
  const isProd = mode === 'production'

  return {
    base: !isProd ? '//location:7100/app-sub' : '/app-sub',
    plugins: [
      vue(),
      qiankun('app-sub', {
        useDevMode: true,
      }),
    ],
    server: {
      hmr: false, // vite-plugin-qiankun 开发模式和 vite 热更新冲突
      port: 7100,
      cors: true,
      // 设置源是因为图片资源会找错位置所以通过这个让图片等资源不会找错
      origin: '//location:7100',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: {
      emptyOutDir: true,
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.error'], // Remove console logs
        },
        format: {
          comments: false, // Remove comments
        },
      },
    },
  }
})
