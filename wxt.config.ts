import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// See https://wxt.dev/api/config.html
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'wxt'

export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  runner: {
    openConsole: true,
    startUrls: ['https://roll20.net/'],
  },
  dev: {
    server: {
      hostname: 'localhost',
      port: 3010,
    },
  },
  manifest: {
    name: 'Лист заклинаний для GG',
    description: 'Лист заклинаний для GG',
    permissions: ['storage', 'tabs', 'scripting', 'activeTab', 'sidePanel', 'storage'],
    // background: {
    //   "service_worker": "service-worker.js"
    // },
    action: {
      default_title: 'Click to open panel',
    },
    commands: {
      _execute_action: {
        suggested_key: {
          default: 'Ctrl+B',
          mac: 'Command+B',
        },
      },
    },
    content_scripts: [
      {
        js: ['content-scripts/content.js'],
        matches: ['*://*/*'],
      },
    ],
    host_permissions: ['*://*/*'],
  },
  outDir: '/Users/bladov/GG-spell-list/dist',
  srcDir: 'src',
  vite: () => ({
    // Override config here, same as `defineConfig({ ... })`
    // inside vite.config.ts files
    plugins: [
      Components({
        resolvers: [
          PrimeVueResolver(),
        ],
      }),
    ],
  }),
})
