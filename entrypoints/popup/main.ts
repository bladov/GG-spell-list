import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

console.log('document main', document);
// @ts-ignore
createApp(App).mount('#app');


(browser.action ?? browser.browserAction).onClicked.addListener(
    // async (tab) => {
    //   if (tab.id && tab.url && contentMatch.includes(tab.url)) {
    //     const res = await browser.scripting.executeScript({
    //       target: { tabId: tab.id },
    //       files: ["/content-scripts/content-2.js"],
    //     });
    //     console.log("result", res);
    //   }
    // },
    async (tab) => {
        if (tab.id && tab.url) {
            const res = await browser.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["/content-2.js"],
            });
            console.log("result", res);
        }
    },
);