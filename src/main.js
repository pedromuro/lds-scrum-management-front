import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "@/components/router";
import '@/css/main.css';


import './plugins/axios';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
