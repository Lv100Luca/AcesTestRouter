import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Home from './views/HomeView.vue'
import router from './router'

import '../../work/AcesTestRevised/src/assets/main.css'

const app = createApp(Home)

app.use(createPinia())
app.use(router)

app.mount('#app')
