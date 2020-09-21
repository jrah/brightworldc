import Vue from 'vue'
import App from './App.vue'
import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.config.productionTip = false
Vue.use(VueBlobJsonCsv)

new Vue({
  render: h => h(App),
}).$mount('#app')
