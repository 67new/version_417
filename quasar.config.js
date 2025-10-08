// quasar.config.js
import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => ({
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
    publicPath: '/version_417/', // ⬅️ ให้ตรงกับชื่อ repo/Pages
    distDir: 'docs'              // ⬅️ ให้ build ลง docs/
  },

  devServer: { open: true },
  framework: { plugins: ['Notify'] },
  animations: []
}))
