import Vue from 'vue'
import App from './App.vue'
import LicensePlate from '../packages/index.js'

Vue.use(LicensePlate)
Vue.config.productionTip = false
new Vue({ render: h => h(App) }).$mount('#app')
