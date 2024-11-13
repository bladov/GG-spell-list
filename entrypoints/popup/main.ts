import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

console.log('document main', document);
// @ts-ignore
alert(document.lastChild.children[1].children[13])
createApp(App).mount('#app');
