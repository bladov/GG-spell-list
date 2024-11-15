import { createApp } from 'vue';
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import './style.css';
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
