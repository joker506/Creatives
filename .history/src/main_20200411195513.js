import Vue from 'vue'
import
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')