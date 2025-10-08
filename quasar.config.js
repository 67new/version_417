// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: ['axios'],
    css: ['app.scss'],
    extras: ['roboto-font', 'material-icons'],

    // ⬅️ ต้องอยู่นอก build
    vueRouterMode: 'hash',

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },

      // ⬅️ ให้ตรงกับ path จริงของ GitHub Pages
      publicPath: '/version_417/',

      // ⬅️ ให้ GitHub Pages เสิร์ฟผล build จาก /docs
      distDir: 'docs'
    },

    devServer: { open: true },

    framework: {
      config: {},
      plugins: ['Notify']
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false
    },

    // ถ้าทดสอบแล้วหน้าแคช ให้ปิด PWA ไปก่อนก็ได้
    pwa: {
      workboxMode: 'GenerateSW'
    },

    capacitor: { hideSplashscreen: true },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      builder: { appId: 'quasar-project' }
    },

    bex: { extraScripts: [] }
  }
})
