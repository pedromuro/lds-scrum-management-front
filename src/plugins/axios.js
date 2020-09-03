import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://poliscrum.com/api/v1/public/';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
    }
});