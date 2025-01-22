# Project directory structure
my-electron-app/
├── public/                     # 静态资源（不会被 Vite 处理）
│   └── icon.png                # 应用图标
├── src/                        # 源代码目录
│   ├── main/                   # Electron 主进程代码
│   │   ├── main.ts             # 主进程入口文件
│   │   └── preload.ts          # Preload Script
│   ├── renderer/               # 渲染进程代码
│   │   ├── react-app/          # React 应用
│   │   │   ├── App.tsx         # React 主组件
│   │   │   ├── main.tsx        # React 入口文件
│   │   │   └── index.html      # React 入口 HTML
│   │   ├── vue-app/            # Vue 应用
│   │   │   ├── App.vue         # Vue 主组件
│   │   │   ├── main.ts         # Vue 入口文件
│   │   │   └── index.html      # Vue 入口 HTML
│   │   ├── svelte-app/         # Svelte 应用
│   │   │   ├── App.svelte      # Svelte 主组件
│   │   │   ├── main.ts         # Svelte 入口文件
│   │   │   └── index.html      # Svelte 入口 HTML
│   │   └── shared/             # 共享代码（工具函数、类型定义等）
│   │       ├── utils.ts        # 工具函数
│   │       └── types.ts        # TypeScript 类型定义
│   ├── styles/                 # 全局样式
│   │   └── tailwind.css        # Tailwind CSS 入口文件
│   └── assets/                 # 静态资源（会被 Vite 处理）
│       └── logo.png            # 应用 Logo
├── .eslintrc.js                # ESLint 配置
├── .prettierrc.js              # Prettier 配置
├── index.html                  # 主入口 HTML 文件
├── package.json                # 项目依赖和脚本
├── tailwind.config.js          # Tailwind CSS 配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.js              # Vite 配置
└── electron-builder.yml        # Electron 打包配置

