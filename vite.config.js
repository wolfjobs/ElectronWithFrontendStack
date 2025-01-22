// vite.config.js
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(resolve(__dirname, 'src/main.tsx'));

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'; // 判断是否为开发模式

  return {
    // 开发服务器配置
    server: {
      port: 3000, // 开发服务器端口
      open: [
        '/index.html',
        '/renderer/react-app/index.html',
        '/renderer/vue-app/index.html',
        '/renderer/svelte-app/index.html',
      ], // 启动时自动打开浏览器
      // proxy: {
      //   // 配置代理，解决跨域问题
      //   '/api': {
      //     target: 'http://localhost:5000', // 后端 API 地址
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
    plugins: [
      // createHtmlPlugin({
      //   entry: resolve(__dirname, 'src/main/main.js'), // 指定入口 JS 文件
      //   template: resolve(__dirname, 'src/main/index.html'), // 自定义 HTML 模板
      //   inject: {
      //     data: {
      //       title: 'My Custom App', // 注入变量
      //     },
      //   },
      // }),
      react(),
      vue(),
      svelte(),
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          react: resolve(__dirname, 'src/renderer/react-app/index.html'),
          vue: resolve(__dirname, 'src/renderer//vue-app/index.html'),
          svelte: resolve(__dirname, 'src/renderer/svelte-app/index.html'),
        },
      },
    },

    // 开发模式下的优化配置
    optimizeDeps: {
      include: ['react', 'react-dom', 'vue', 'svelte'], // 预构建依赖
    },

    // 环境变量配置
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // 注入环境变量
    },

    // CSS 配置
    css: {
      devSourcemap: isDev, // 开发模式下生成 CSS Sourcemap
    },

    // 开发模式下的其他配置
    ...(isDev && {
      // 开发模式下的特殊配置
      logLevel: 'info', // 日志级别
      clearScreen: false, // 不清屏，保留日志
    }),
  };
});
