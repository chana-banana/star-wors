import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { store } from './store/store.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
.use(store)
