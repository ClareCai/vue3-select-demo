import { createApp } from 'vue'
import App from './App.vue'
import fxCommonUi from '@/components'

import './assets/stylus/main.styl'

createApp(App).use(fxCommonUi).mount('#app')
