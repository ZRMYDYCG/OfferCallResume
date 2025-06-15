import * as path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { buildInfoPlugin, hmrGuardPlugin } from './vite/custom-plugin/index'

// 配置文档: https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    buildInfoPlugin(),
    hmrGuardPlugin(),
    // 生产环境启用gzip压缩
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240, // 大于10KB的文件才压缩
      deleteOriginFile: false, // 不删除原文件
    }),
    // 构建分析
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ] as any,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    // 输出目录
    outDir: 'dist',
    // 静态资源目录
    assetsDir: 'assets',
    // 小于4KB的资源内联为base64
    assetsInlineLimit: 4096,
    // 生产环境不生成sourcemap
    sourcemap: false,
    // 使用terser压缩JS
    minify: 'terser',
    // 关闭压缩大小报告，提升构建速度
    reportCompressedSize: false,
    // CSS代码分割
    cssCodeSplit: true,
    // 文件名哈希，优化缓存
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
    // Terser配置
    terserOptions: {
      compress: {
        // 移除生产环境的console.log
        drop_console: true,
        // 移除debugger
        drop_debugger: true,
      },
    },
  },
})
