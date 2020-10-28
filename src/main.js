import { createApp } from 'vue'
import App from './App.vue'
import VueQr from 'vue-qr'

const Vue = createApp(App);
Vue.use(VueQr)

Vue.mount('#app');