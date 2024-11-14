import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    name: 'GG spell list',
    description: 'Лист заклинаний для GG',
    permissions: ['storage', 'tabs', "scripting", "activeTab", "sidePanel", "storage"],
    // background: {
    //   "service_worker": "service-worker.js"
    // },
    action: {
      "default_title": "Click to open panel"
    },
    commands: {
      "_execute_action": {
        "suggested_key": {
          "default": "Ctrl+B",
          "mac": "Command+B"
        }
      }
    },
    "content_scripts": [
      {
        "js": ["content-scripts/content.js"],
        matches: ["*://*/*"],
      }
    ],
    "host_permissions": ["*://*/*"],
  },
  outDir: '/Users/bladov/GG-spell-list/dist',
  srcDir: 'src',
});
