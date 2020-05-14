import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true,
    hmr: true,
  },
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  disableCSSModules: false,
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  routes: [
    { path: '/login', component: '@/components/Login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: './Index/Index' },
        { path: '/Chat', component: './Chat/Index' },
        { path: '/Friends', component: './Friends/Index' },
        { path: '/Share', component: './Share/Index' },
        { path: '/User', component: './User/Index' },
        { path: '/Statistics', component: './Statistics/Index' },
      ],
    },
  ],
  theme: {
    '@box-shadow-bg-me': '#bfbfbf', //自定义阴影
    '@primary-color': '#ffbf00', // 全局主色
    '@link-color': '#ffbf00', // 链接色
    '@success-color': '#52c41a', // 成功色
    '@warning-color': '#faad14', // 警告色
    '@error-color': '#f5222d', // 错误色
    '@font-size - base': '14px', // 主字号
    '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
    '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
    '@text-color - secondary': ' rgba(0, 0, 0, 0.45)', // 次文本色
    '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
    '@border-radius - base': '4px', // 组件/浮层圆角
    '@border-color - base': '#d9d9d9', // 边框色
    '@box-shadow - base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
  },
});
