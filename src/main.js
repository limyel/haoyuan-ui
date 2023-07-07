import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from './router'
import "virtual:windi.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
