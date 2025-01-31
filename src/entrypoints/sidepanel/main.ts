import '@/assets/index.css'
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.config.errorHandler = (err, vm, info) => {
  logToActivePage(`
    "Error:", ${err}
    ------------------------------
    "Vue component:", ${vm}
    ------------------------------
    "Additional info:", ${info}
  `)
};

app.mount('#app')

window.addEventListener("error", (event) => {
  logToActivePage(event.message)
});
